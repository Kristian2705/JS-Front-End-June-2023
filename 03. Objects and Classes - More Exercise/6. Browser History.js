function solve(data, actions){
    actions.forEach(action => {
        const [whatToDo, ...siteTokens] = action.split(' ');
        const site = siteTokens.join(' ');
        if(action === "Clear History and Cache"){
            data["Open Tabs"] = [];
            data["Recently Closed"] = [];
            data["Browser Logs"] = [];
        }
        else if(whatToDo === "Open"){
            if(!data["Open Tabs"].includes(site)){
                data["Open Tabs"].push(site);
                data["Browser Logs"].push(action);
            }
        }
        else if(whatToDo === "Close"){
            if(data["Open Tabs"].includes(site)){
                data["Open Tabs"].splice(data["Open Tabs"].indexOf(site), 1);
                data["Recently Closed"].push(site);
                data["Browser Logs"].push(action);
            }
        }
    });

    console.log(data["Browser Name"]);
    Object.keys(data).forEach(key => {
        if(key !== "Browser Name"){
            console.log(`${key}: ${data[key].join(', ')}`);
        }
    })
}

solve({"Browser Name":"Mozilla Firefox",
"Open Tabs":["YouTube"],
"Recently Closed":["Gmail",
"Dropbox"],
"Browser Logs":["Open Gmail",
"Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]},
["Open Wikipedia", "Clear History and Cache", "Open Twitter"])