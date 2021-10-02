document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('.socials').addEventListener('mouseenter', () => {
        document.querySelectorAll('.socials .icon').forEach(item => {
            item.classList.remove('animation')
        })
    })
})
