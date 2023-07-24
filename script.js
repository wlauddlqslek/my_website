window.addEventListener('load', () => {
    const $s = {
        input: document.getElementById('input'),
        eng: document.getElementById('eng'),
        noEng: document.getElementById('noEng')
    }

    $s.input.onkeyup = () => {
        const arr = $s.input.value.split('\n')
        const engArr = arr.filter(a => {
            return /^[a-z0-9\s]+$/i.test(a)
        })
        const noEngArr = arr.filter(a => {
            return !(/^[a-z0-9\s]+$/i.test(a))
        })
        $s.eng.value = engArr.join('\n')
        $s.noEng.value = noEngArr.join('\n')
    }
})