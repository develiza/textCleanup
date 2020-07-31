log = console.log;

const SUBMIT_BUTTON = document.querySelector('#submit-text');
const SHOW_CLEAN_TEXT = document.querySelector('#clean-text');

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

    const brokenLines = USER_STRING.replace(lineBreaks, '<br/>');
    const trimmedString = brokenLines.replace(regexTrimmer, ' ');
    const noSpaceBeforeDot = trimmedString.replace(spaceBefDot, '.');
    const noSpaceBefExcl = noSpaceBeforeDot.replace(spaceBefExcl, '!');
    const noSpaceBefQuest = noSpaceBefExcl.replace(spaceBefQuest, '?');
    const noSpaceAfterDot = noSpaceBefQuest.replace(dotNoSpace, '. ');
    const noSpaceAfterExcl = noSpaceAfterDot.replace(exclNoSpace, '! ');
    const noSpaceAfterQuest = noSpaceAfterExcl.replace(questNoSpace, '? ');
    const actualBreaks = noSpaceAfterQuest.replace(tempHtmlBreaks, '\n');

    SHOW_CLEAN_TEXT.innerHTML = actualBreaks

    return actualBreaks;
}

const USER_TEXT_SELECT = SUBMIT_BUTTON.addEventListener('click', textCleanup)

let textSample = "Comprovei que, quase tudo o que já foi escrito sobre o amor... é verdadeiro. Shakespeare disse: as viagens terminam com o encontro dos apaixonados.\nQue ideia mais extraordinária!Pessoalmente, nunca experimentei nada, ou algo parecido.Mas estou convencida de que Shakespeare, tenha.Suponho que penso no amor mais do que deveria.Admira - me constantemente seu poder esmagador de alterar e definir nossas vidas.Também foi Shakespeare quem disse que o amor é cego.Pois bem, estou segura de que isso é verdade. Para algumas pessoas, de forma inexplicável o amor se apaga.Para outras, o amor singelamente se vai.Mas é claro, o amor também pode existir, mesmo que só por uma noite.No entanto, existe outra classe de amor mais cruel.Aquele que, praticamente mata suas vítimas.Chama - se 'amor não correspondido' e nesse tipo...sou experiente.A maioria das histórias de amor fala de pessoas que se apaixonam entre si.Mas o que acontece com os demais? E as nossas histórias ? Aquelas que nos apaixonamos                  ?   Somos vítimas de uma aventura unilateral.Somos os amaldiçoados dos seres queridos.Os seres não queridos.Os feridos que se valem por si mesmos. Os incapacitados sem estacionamento reservado           .Comprovei que, quase tudo o que já foi escrito sobre o amor...é verdadeiro.Shakespeare disse: as viagens terminam com o encontro dos apaixonados.Que ideia mais extraordinária!Pessoalmente, nunca experimentei nada, ou algo parecido.Mas estou convencida de que Shakespeare, tenha.Suponho que penso no amor mais do que deveria.Admira - me constantemente seu poder esmagador de alterar e definir nossas vidas.Também foi Shakespeare quem disse que o amor é cego.Pois bem, estou segura de que isso é verdade.Para algumas pessoas, de forma inexplicável o amor se apaga.Para outras, o amor singelamente se vai.Mas é claro, o amor também pode existir, mesmo que só por uma noite.No entanto, existe outra classe de amor mais cruel.Aquele que, praticamente mata suas vítimas.Chama - se 'amor não correspondido'     e    nesse tipo...sou experiente.A maioria das histórias de amor fala de pessoas que se apaixonam entre si.Mas o que acontece com os demais ? E as nossas histórias ? ."
// log(textCleanup(textSample));