window.addEventListener('load', () => {
    const $s = {
        input: document.getElementById('input'),
        kor: document.getElementById('kor'),
        noKor: document.getElementById('noKor'),
        eng: document.getElementById('eng'),
        noEng: document.getElementById('noEng')
    };

    const korRE = /^[ㄱ-ㅎㅏ-ㅣ가-힣0-9]+$/i;
    const engRE = /^[a-z0-9\s]+$/i;


    $s.input.onkeyup = () => {
        const arr = $s.input.value.split('\n');
        const korArr = arr.filter(a => {
            return korRE.test(a)
        });
        const noKorArr = arr.filter(a => {
            return !(korRE.test(a))
        });
        const engArr = arr.filter(a => {
            return engRE.test(a)
        });
        const noEngArr = arr.filter(a => {
            return !(engRE.test(a))
        });
        $s.kor.value = korArr.join('\n');
        $s.noKor.value = noKorArr.join('\n');
        $s.eng.value = engArr.join('\n');
        $s.noEng.value = noEngArr.join('\n');
    };
});