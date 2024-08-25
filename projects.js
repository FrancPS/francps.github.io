// Fetch the JSON file
fetch('projects.json')
    .then(response => response.json())
    .then(jsonData => {
        const flexContainer = document.getElementsByClassName('flex_container')[0];

        Object.keys(jsonData).forEach(key => {
            const project = jsonData[key];

            // Create a new flex element
            const flexItem = document.createElement('div');
            flexItem.className = 'flex_item content';
            flexItem.style = "background-image: url(data/img/" + project.showURL + ")"

            // Create a new link element
            const link = document.createElement('a');
            link.href = project.projectURL
            link.target = "_blank"
            link.rel = "noopener noreferrer"

            // Create the item content to the element
            const content = document.createElement('div');
            content.className = "item_overlay"

            // Add the content information
            const title = document.createElement('h2');
            title.textContent = project.title;
            const release = document.createElement('p');
            release.textContent = project.release;
            const descr = document.createElement('p');
            descr.textContent = project.descr;

            content.appendChild(document.createElement('br'));
            content.appendChild(title);
            content.appendChild(release);
            content.appendChild(document.createElement('br'));
            content.appendChild(descr);


            // Add the elements tree to the html
            link.appendChild(content);
            flexItem.appendChild(link);
            flexContainer.appendChild(flexItem);
        });

    })
    .catch(error => console.error('Error fetching the JSON file:', error));