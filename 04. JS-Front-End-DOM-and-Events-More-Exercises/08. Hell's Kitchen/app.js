function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let restaurants = JSON.parse(document.querySelector('#inputs textarea').value);
      const data = restaurants.reduce((acc, curr) => {
         const[name, workers] = curr.split(' - ');
         if(!acc.hasOwnProperty(name)){
            acc[name] = [];
         }
         workers.split(', ').forEach(worker => {
            const [workerName, salary] = worker.split(' ');
            const currWorkerObj = {}
            currWorkerObj[workerName] = Number(salary);
            acc[name].push(currWorkerObj);
         });
         return acc;
      }, {});

      let maxAvgSalary = 0;
      let maxSalaryInBestRestaurant = 0;
      let keyOfBestRestaurant = '';
      Object.keys(data).forEach(key => {
         let averageSalary = 0;
         data[key].forEach(worker => {
            const key1 = Object.keys(worker)[0];
            averageSalary += worker[key1];
         });
         averageSalary = averageSalary / data[key].length;
         if(maxAvgSalary < averageSalary){
            maxSalaryInBestRestaurant = 0;
            maxAvgSalary = averageSalary;
            keyOfBestRestaurant = key;
            data[keyOfBestRestaurant].forEach(worker => {
               let salary = worker[Object.keys(worker)[0]];
               if(maxSalaryInBestRestaurant < salary){
                  maxSalaryInBestRestaurant = salary;
               }
            })
         }
      })

      document.querySelector('#bestRestaurant p').textContent = `Name: ${keyOfBestRestaurant} Average Salary: ${maxAvgSalary.toFixed(2)} Best Salary: ${maxSalaryInBestRestaurant.toFixed(2)}`;
      let result = '';
      data[keyOfBestRestaurant].sort((a, b) => b[Object.keys(b)[0]] - a[Object.keys(a)[0]]).forEach(worker => {
         let name = Object.keys(worker)[0];
         result += `Name: ${name} With Salary: ${worker[name]} `;
      })
      document.querySelector('#workers p').textContent = result.trim();
   }
}