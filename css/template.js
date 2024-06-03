document.addEventListener('DOMContentLoaded', function() {
    const searchIcon = document.querySelector('.search-icon');
    const searchBar = document.querySelector('.search-bar');

    searchIcon.addEventListener('click', function(event) {
        event.preventDefault(); // 防止默认点击行为
        if (searchBar.style.width === '0px' || searchBar.style.width === '') {
            searchBar.style.width = '200px';
            searchBar.style.opacity = '1';
        } else {
            searchBar.style.width = '0';
            searchBar.style.opacity = '0';
        }
    });
});


const fakeFoodData = [
    "炒麵",
    "漢堡",
    "披薩",
    "炸雞",
    "壽司",
    "火鍋",
    "沙拉",
    // 在这里添加更多的美食数据
];







const searchBar = document.getElementById('search-bar');
const searchResults = document.getElementById('search-results');

const simulateSearch = () => {
    const keyword = searchBar.value.trim().toLowerCase(); // trim()用于移除输入框中的前后空格
    const results = fakeFoodData.filter(item => item.toLowerCase().includes(keyword));

    // 清空之前的搜索结果
    searchResults.innerHTML = '';

    // 显示搜索结果
    results.forEach(result => {
        const resultItem = document.createElement('div');
        resultItem.textContent = result;
        searchResults.appendChild(resultItem);
    });

    // 如果没有搜索结果，显示提示信息
    if (results.length === 0) {
        const noResultItem = document.createElement('div');
        noResultItem.textContent = '沒有找到相關美食';
        searchResults.appendChild(noResultItem);
    }

    // 显示搜索结果容器
    searchResults.style.display = 'block';
};


// 监听输入框的输入事件
searchBar.addEventListener('input', () => {
    simulateSearch();
});

// 点击其他地方隐藏搜索结果
document.addEventListener('click', (event) => {
    if (!event.target.closest('.search')) {
        searchResults.style.display = 'none';
    }
});


const showAllFoods = () => {
    searchResults.innerHTML = ''; // 清空之前的搜索结果
    fakeFoodData.forEach(food => {
        const resultItem = document.createElement('div');
        resultItem.textContent = food;
        searchResults.appendChild(resultItem);
    });
    searchResults.style.display = 'block'; // 显示搜索结果容器
};

// 当输入框获得焦点时显示所有美食
searchBar.addEventListener('focus', () => {
    showAllFoods();
});


