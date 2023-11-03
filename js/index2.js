window.addEventListener('DOMContentLoaded', function () {

    const dataContents = Array.from(document.getElementsByClassName('data_content_by_link'))
    const navItems = Array.from(document.getElementsByClassName('nav-link2'))

    /* BEGIN - HIDE/SHOW DATA CONTENTS BY URL */
    const urlParams = new URLSearchParams(window.location.search)
    const selected = urlParams.get('selected')

    if (selected) {
        hideDataContent(dataContents)

        /* show data contents */
        const elementToShow = document.getElementById('data_content_' + selected);
        if (elementToShow) {
            elementToShow.style.visibility = 'visible'
            elementToShow.style.opacity = '1'
        }

        /* set navbar item color by url */
        const navItems = Array.from(document.getElementsByClassName('nav-link2'))
        if (navItems[selected]) {
            navItems[selected].style.color = '#ac0000'
        }
    }
    /* END - HIDE/SHOW DATA CONTENTS BY URL */

    /* BEGIN - HIDE/SHOW NAVBAR ITEMS COLOR AND DATA CONTENTS */
    const itemState = new Array(navItems.length).fill(false)

    navItems.forEach(function(item, index) {
        /* set navbar item color = true every time the window is loaded */
        window.addEventListener('load', function () {
            itemState[index] = true
        })

        /* show and hide color to the navbar's items */
        item.addEventListener('mouseover', function () {
            if (!itemState[index]) {
                this.style.color = '#ac0000'
            }
        })

        item.addEventListener('mouseout', function () {
            if (!itemState[index]) {
                this.style.color = ''
            }
        })

        /* show and hide contents by clicking the items */
        item.addEventListener('click', function () {
            
            itemState.fill(false)
            navItems.forEach(function(item_color) {
                item_color.style.color = ''
            })
            this.style.color = '#ac0000'
            itemState[index] = true

            if (index == 0) {
                window.location.href = 'index.html'
            }
            if (index == 1) {
                hideDataContent(dataContents)
                dataContents[0].style.visibility = 'visible'
                dataContents[0].style.opacity = '1'
            }
            if (index == 2) {
                hideDataContent(dataContents)
                dataContents[1].style.visibility = 'visible'
                dataContents[1].style.opacity = '1'
            }
            if (index == 3) {
                hideDataContent(dataContents)
                dataContents[2].style.visibility = 'visible'
                dataContents[2].style.opacity = '1'
            }
            if (index == 4) {
                hideDataContent(dataContents)
                dataContents[3].style.visibility = 'visible'
                dataContents[3].style.opacity = '1'
            }
            if (index == 5) {
                hideDataContent(dataContents)
                dataContents[4].style.visibility = 'visible'
                dataContents[4].style.opacity = '1'
            }
        })
    })
    /* END - HIDE/SHOW NAVBAR ITEMS COLOR AND DATA CONTENTS */

    /* hide data contents */
    function hideDataContent(dataContents) {
        dataContents.forEach(function(data) {
            data.style.visibility = 'hidden'
            data.style.opacity = '0'
        })
    }

})