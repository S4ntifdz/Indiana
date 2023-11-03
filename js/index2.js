window.addEventListener('DOMContentLoaded', function () {

    const navItems = Array.from(document.getElementsByClassName('nav-link2'))
    const dataContents = Array.from(document.getElementsByClassName('data_content_by_link'))

    const itemState = new Array(navItems.length).fill(false)

    navItems.forEach(function(item, index) {
        /* set color to 'Nosotros' every time the window is loaded */
        window.addEventListener('load', function () {
            navItems[1].style.color = '#ac0000'
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
                hideDataContent()
                dataContents[0].style.visibility = 'visible'
                dataContents[0].style.opacity = '1'
            }
            if (index == 2) {
                hideDataContent()
                dataContents[1].style.visibility = 'visible'
                dataContents[1].style.opacity = '1'
            }
            if (index == 3) {
                hideDataContent()
                dataContents[2].style.visibility = 'visible'
                dataContents[2].style.opacity = '1'
            }
            if (index == 4) {
                hideDataContent()
                dataContents[3].style.visibility = 'visible'
                dataContents[3].style.opacity = '1'
            }
            if (index == 5) {
                hideDataContent()
                dataContents[4].style.visibility = 'visible'
                dataContents[4].style.opacity = '1'
            }
        })
    })

    /* Hide contents */
    function hideDataContent() {
        dataContents.forEach(function(data) {
            data.style.visibility = 'hidden'
            data.style.opacity = '0'
        })
    }

})