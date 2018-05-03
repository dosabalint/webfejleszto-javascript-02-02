// ELEMEK ÖSSZEGYŰJTÉSE

let buttonH1 = document.getElementById('buttonH1');
let buttonP = document.getElementById('buttonP');
let buttonStrong = document.getElementById('buttonStrong');
let input = document.getElementById('input');
let output = document.getElementById('output');

// init
RenderOutput();

// FELIRATKOZÁS

buttonH1.addEventListener('click', OnClickH1);
buttonP.addEventListener('click', OnClickP);
buttonStrong.addEventListener('click', OnClickStrong);
input.addEventListener('keyup', RenderOutput);

// ESEMÉNYRE REAGÁLÓ FÜGGVÉNYEK

// h1

function OnClickH1() {
  // értékek begyűjtése
  let text = input.value;
  let startTag = '<h1>';
  let endTag = '</h1>';

  // érték frissítése
  input.value = GetWrappedSelection(
    text,
    input.selectionStart,
    input.selectionEnd,
    startTag,
    endTag
  );

  // kiírás
  RenderOutput();
}

// p

function OnClickP() {
  // értékek begyűjtése
  let text = input.value;
  let startTag = '<p>';
  let endTag = '</p>';

  // érték frissítése
  input.value = GetWrappedSelection(
    text,
    input.selectionStart,
    input.selectionEnd,
    startTag,
    endTag
  );

  // kiírás
  RenderOutput();
}

// strong

function OnClickStrong() {
  // értékek begyűjtése
  let text = input.value;
  let startTag = '<strong>';
  let endTag = '</strong>';

  // érték frissítése
  input.value = GetWrappedSelection(
    text,
    input.selectionStart,
    input.selectionEnd,
    startTag,
    endTag
  );

  // kiírás
  RenderOutput();
}

// SEGÍTŐ FÜGGVÉNYEK

function GetWrappedSelection(text, start, end, before, after) {
  // értékek begyűjtése
  let wrappedText = text;

  // beszúrás hátra
  wrappedText = [wrappedText.slice(0, end), after, wrappedText.slice(end)].join(
    ''
  );

  // beszúrás előre
  wrappedText = [
    wrappedText.slice(0, start),
    before,
    wrappedText.slice(start)
  ].join('');

  // érték frissítése
  return wrappedText;
}

// render

function RenderOutput() {
  let html = input.value;
  output.innerHTML = html;
}
