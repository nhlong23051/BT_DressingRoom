import data from '../data/Data.json' assert {type: 'json'}


const getEle = (id) => document.getElementById(id);
let clothArr = data.tabPanes

const handleItem = (dk) => {
    let result = '';
    clothArr.map((item) => {
        if (item.type === dk) {
            result += `
            <div class="col-md-2 mx-3">
            <img onclick="chooseItem('${item.id}','${item.type}')" src="${item.imgSrc_jpg}" alt="" style="width: 100%; cursor: pointer">
            </div>
            `
        }
    })
    document.getElementById('tab-content').innerHTML = result
}
handleItem('topclothes');

const chooseItem = (id, type) => {
    console.log(id, type);
    let result = '';
    clothArr.map((item) => {
        if (item.id === id) {
            result = `
         <img src="${item.imgSrc_png}" style="width: 100%; height: 100%;" alt="">
        `
        }
    })
    getEle(type).innerHTML = result
}

window.chooseItem = chooseItem


getEle('ao').addEventListener('click', () => {
    handleItem('topclothes');
});

getEle('quan').addEventListener('click', () => {
    handleItem('botclothes');
});

getEle('giay').addEventListener('click', () => {
    handleItem('shoes');
});

getEle('tui').addEventListener('click', () => {
    handleItem('handbags');
});

getEle('dayChuyen').addEventListener('click', () => {
    handleItem('necklaces');
});

getEle('kieuToc').addEventListener('click', () => {
    handleItem('hairstyle');
});

getEle('nen').addEventListener('click', () => {
    handleItem('background');
});