// document.addEventListener('DOMContentLoaded', function() {
//     const searchIcon = document.querySelector('.search-icon');
//     const searchBar = document.querySelector('.search-bar');

//     searchIcon.addEventListener('click', function(event) {
//         event.preventDefault(); // 防止默认点击行为
//         if (searchBar.style.width === '0px' || searchBar.style.width === '') {
//             searchBar.style.width = '200px';
//             searchBar.style.opacity = '1';
//         } else {
//             searchBar.style.width = '0';
//             searchBar.style.opacity = '0';
//         }
//     });
// });
document.addEventListener('DOMContentLoaded', function() {
    const searchIcon = document.querySelector('.search-icon');
    const searchBar = document.querySelector('.search-bar');
    const searchResults = document.getElementById('search-results');

    // 示例数据
    const foods = [
        { name: '飯', category: '米饭类' },
        { name: '炸酱面', category: '面食类' },
        { name: '水饺', category: '面食类' },
        { name: '煎饼', category: '小吃类' },
        { name: '卤肉饭', category: '米饭类' },
        { name: '牛肉面', category: '面食类' },
    ];

    searchIcon.addEventListener('click', function(event) {
        event.preventDefault(); // 防止默认点击行为
        if (searchBar.style.width === '0px' || searchBar.style.width === '') {
            searchBar.style.width = '200px';
            searchBar.style.opacity = '1';
            searchBar.style.borderBottomColor = 'green'; // 显示搜索栏时显示绿色边框
            searchBar.focus(); // 使搜索栏获取焦点
        } else {
            searchBar.style.width = '0';
            searchBar.style.opacity = '0';
            searchBar.style.borderBottomColor = 'transparent'; // 隐藏搜索栏时隐藏边框颜色
            searchResults.innerHTML = ''; // 清空搜索结果
        }
    });

    searchBar.addEventListener('input', function() {
        const query = searchBar.value.toLowerCase();
        searchResults.innerHTML = ''; // 清空之前的搜索结果

        const results = foods.filter(food => food.name.toLowerCase().includes(query));
        if (results.length > 0) {
            results.forEach(food => {
                const resultItem = document.createElement('div');
                resultItem.textContent = `${food.name} (${food.category})`;
                searchResults.appendChild(resultItem);
            });
        } else {
            searchResults.textContent = '没有找到相关结果';
        }
    });
});


