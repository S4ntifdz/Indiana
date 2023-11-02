window.addEventListener('DOMContentLoaded', function () {

    const navItems = Array.from(document.getElementsByClassName('nav-link2'))
    const dataContents = Array.from(document.getElementsByClassName('data_content_by_link'))


    navItems.forEach(function(item, index) {
        item.addEventListener('click', function () {
            if (index == 1) {
                dataContents[1].style.visibility = 'hidden'
                dataContents[1].style.opacity = '0'
                dataContents[0].style.visibility = 'visible'
                dataContents[0].style.opacity = '1'
            }
            if (index == 2) {
                dataContents[0].style.visibility = 'hidden'
                dataContents[0].style.opacity = '0'
                dataContents[1].style.visibility = 'visible'
                dataContents[1].style.opacity = '1'
            }
        })
    })

})