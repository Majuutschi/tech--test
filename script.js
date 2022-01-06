const form = document.querySelector('#todoForm');
const input = document.querySelector('#todoInput');
const output = document.querySelector('#output');
const error = document.querySelector('#error');

let items = [];

const fetchItems = async () => {
    let url = 'https://feeder.co/out/secret/discover/news.json';
    const res = await fetch(url);
    const data = await res.json();
    
    items = data.items;
    console.log(items);
    
    listItems(items);
    
}

fetchItems()

const listItems = (items) => {
    output.innerHTML = '';

    items.forEach(item => {
        output.innerHTML += newItem(item);
    })
}

const newItem = item => {

    let newsItem = `
        <div class="card p-3 my-3 news">
            <div id="${item.id}" class="flex">
                <div class="p-3 news-text">
                    <div class="flex">
                        <small>${item._feeder.source}</small>
                        <small>${item.date_published}</small>
                    </div>
                    <h3 class="title">${item.title}</h3>
                    
                    <div>
                        <div class="content">${item.content_html}</div>
                    </div>
                </div>
                <div class="image">
                    <img src="${item.image}" alt="">
                </div>
            </div>
        </div>
        `

        return newsItem;

}
