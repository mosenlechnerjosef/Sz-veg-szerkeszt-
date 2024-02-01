document.getElementById('filePicker').addEventListener('change', handleFileSelect);
document.getElementById('saveButton').addEventListener('click', saveText);

let kivalasztottFajlNeve; 

function handleFileSelect(event) {
  const fajl = event.target.files[0];
  if (fajl) {
    kivalasztottFajlNeve = fajl.name; 
    const olvaso = new FileReader();
    olvaso.onload = function (e) {
      document.getElementById('textEditor').value = e.target.result;
    };
    olvaso.readAsText(fajl);
  }
}

function saveText() {
  const szovegMentese = document.getElementById('textEditor').value;
  if (!kivalasztottFajlNeve) {
    alert('Nincs kiválasztva fájl!');
    return;
  }

  const blob = new Blob([szovegMentese], { type: 'text/plain' });


  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = kivalasztottFajlNeve;
  link.click();


  const visszajelzes = document.getElementById('feedback');
  visszajelzes.textContent = 'Mentés sikeres!';
  visszajelzes.style.color = 'green';
}

