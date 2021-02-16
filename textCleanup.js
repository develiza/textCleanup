log = console.log;

const SUBMIT_BUTTON = document.querySelector('#submit-text');
const SHOW_CLEAN_TEXT = document.querySelector('#clean-text');
let CLEANED_TEXT;
const CLIPBOARD_BUTTON = document.querySelector('#copy-text');
const textCleanup = () => {
    const USER_STRING = document.querySelector('#add-text').value;

    const lineBreaks = /\n/g;
    const regexTrimmer = /\s{2,}/g;
    const spaceBefDot = /\s\./g;
    const spaceBefExcl = /\s\!/g;
    const spaceBefQuest = /\s\?/g;
    const dotNoSpace = /\.(?=\w)/g;
    const exclNoSpace = /\!(?=\w)/g;
    const questNoSpace = /\?(?=\w)/g;
    const tempHtmlBreaks = /<br>/g;

    const brokenLines = USER_STRING.replace(lineBreaks, '<br>');
    const trimmedString = brokenLines.replace(regexTrimmer, ' ');
    const noSpaceBeforeDot = trimmedString.replace(spaceBefDot, '.');
    const noSpaceBefExcl = noSpaceBeforeDot.replace(spaceBefExcl, '!');
    const noSpaceBefQuest = noSpaceBefExcl.replace(spaceBefQuest, '?');
    const noSpaceAfterDot = noSpaceBefQuest.replace(dotNoSpace, '. ');
    const noSpaceAfterExcl = noSpaceAfterDot.replace(exclNoSpace, '! ');
    const noSpaceAfterQuest = noSpaceAfterExcl.replace(questNoSpace, '? ');
    const actualBreaks = noSpaceAfterQuest.replace(tempHtmlBreaks, '\n');

    SHOW_CLEAN_TEXT.innerHTML = actualBreaks;
    CLEANED_TEXT = actualBreaks;
    CLIPBOARD_BUTTON.innerHTML = '<svg class="clipboard" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!-- Font Awesome Free 5.15.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 40c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm144 418c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V118c0-3.3 2.7-6 6-6h42v36c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12v-36h42c3.3 0 6 2.7 6 6z"/></svg>'
    return actualBreaks;
}

const USER_TEXT_SELECT = SUBMIT_BUTTON.addEventListener('click', textCleanup);

const copyText = () => {
    console.log(CLEANED_TEXT);
    const _CLEAN_TEXT = document.querySelector('#clean-text')
    _CLEAN_TEXT.select();
    document.execCommand('copy');
    CLIPBOARD_BUTTON.innerHTML = 'copied'
}
const USER_TEXT_COPIED = CLIPBOARD_BUTTON.addEventListener('click', copyText);

let textSample = "Comprovei que, quase tudo o que já foi escrito sobre o amor... é verdadeiro. Shakespeare disse: as viagens terminam com o encontro dos apaixonados.\nQue ideia mais extraordinária!Pessoalmente, nunca experimentei nada, ou algo parecido.Mas estou convencida de que Shakespeare, tenha.Suponho que penso no amor mais do que deveria.Admira - me constantemente seu poder esmagador de alterar e definir nossas vidas.Também foi Shakespeare quem disse que o amor é cego.Pois bem, estou segura de que isso é verdade. Para algumas pessoas, de forma inexplicável o amor se apaga.Para outras, o amor singelamente se vai.Mas é claro, o amor também pode existir, mesmo que só por uma noite.No entanto, existe outra classe de amor mais cruel.Aquele que, praticamente mata suas vítimas.Chama - se 'amor não correspondido' e nesse tipo...sou experiente.A maioria das histórias de amor fala de pessoas que se apaixonam entre si.Mas o que acontece com os demais? E as nossas histórias ? Aquelas que nos apaixonamos                  ?   Somos vítimas de uma aventura unilateral.Somos os amaldiçoados dos seres queridos.Os seres não queridos.Os feridos que se valem por si mesmos. Os incapacitados sem estacionamento reservado           .Comprovei que, quase tudo o que já foi escrito sobre o amor...é verdadeiro.Shakespeare disse: as viagens terminam com o encontro dos apaixonados.Que ideia mais extraordinária!Pessoalmente, nunca experimentei nada, ou algo parecido.Mas estou convencida de que Shakespeare, tenha.Suponho que penso no amor mais do que deveria.Admira - me constantemente seu poder esmagador de alterar e definir nossas vidas.Também foi Shakespeare quem disse que o amor é cego.Pois bem, estou segura de que isso é verdade.Para algumas pessoas, de forma inexplicável o amor se apaga.Para outras, o amor singelamente se vai.Mas é claro, o amor também pode existir, mesmo que só por uma noite.No entanto, existe outra classe de amor mais cruel.Aquele que, praticamente mata suas vítimas.Chama - se 'amor não correspondido'     e    nesse tipo...sou experiente.A maioria das histórias de amor fala de pessoas que se apaixonam entre si.Mas o que acontece com os demais ? E as nossas histórias ? ."
// log(textCleanup(textSample));