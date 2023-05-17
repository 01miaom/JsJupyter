     let currentCellIndex = 0;
     let cells = [
        { type: "text", content: "This is a text cell", img:""},
        { type: "code", content: "console.log('Hello, World!')", output:"Hello, World!", img:"" },
      ];
     let __prevDataUrl = "";
        
     let _black = "data:image/png;base64,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";
     
      const renderCell = (cell, index) => {
        const cellEl = document.createElement("div");
        cellEl.className = "block";
        cellEl.setAttribute("data-index", index);
          
        const cellCont = document.createElement("div");
        cellCont.className = "control";
        cellEl.append(cellCont);

        if (cell.type === "code") {
          const inputEl = document.createElement("div"); // 
          const codeMirrorInstance = CodeMirror(inputEl, { // 
                autoRefresh: true,
                value: cell.content,
                mode: "javascript",
                lineNumbers: false,
                viewportMargin: Infinity,
                //theme: "material",
            });
        //codeMirrorInstance.refresh();

            
        var tmp =function(){
            codeMirrorInstance.refresh();
        }

        setTimeout(tmp,50);
        
          inputEl.classList.add("input");
          inputEl.addEventListener("blur", () => {
            cell.content = codeMirrorInstance.value;//inputEl.value;
            console.log(codeMirrorInstance.value);
          });
          cellEl.appendChild(inputEl);
        
        //initial output
        let output = cell.output;
        const outputEl = document.createElement("div");
        outputEl.classList.add("output");
        outputEl.innerText = output;
        
        if(cell.img != ""){
            let imgElement = document.createElement("img");
            imgElement.src = cell.img;
            imgElement.className = "img"
            cellEl.appendChild(imgElement);
        }
            
        if(output != ""){
            cellEl.appendChild(outputEl);
        }

          const runBtn = document.createElement("button");
          const runi = document.createElement("i");
          runi.className = 'bi bi-caret-right';
          runBtn.appendChild(runi);
          //runBtn.innerText = "Run";
          runBtn.id = "runbtn";
            
          runBtn.addEventListener("click", () => {
            let output = "";
            const outputEl = document.createElement("div");
            outputEl.classList.add("output");
            
            let mycanvas = cellEl.querySelector("#canvas");
            if(mycanvas!=null){
                mycanvas.remove();
            }
            const canvasEl = document.createElement("canvas");
            canvasEl.height = 400;
            canvasEl.width = 400;
            canvasEl.id = "canvas";
            cellEl.append(canvasEl);
            //const canvas = document.getElementById("canvas");  
            
            try {
              //const output = eval(cell.content);
                if(/\bimport\b/.test(cell.content)){
                        import(`data:text/javascript,${encodeURIComponent(cell.content)}`)
                        .then(module => {
                            output = module.output;
                            outputEl.innerText = output;
                            cell.output = output;
                        })
                    .catch(error => {
                        outputEl.innerText = error;
                        cell.output = error;
                    });
                } else {
                    
                  const fn = new Function(cell.content);

                  const log = console.log;
                    console.log = function(message) {
                    output += message + "\n";
                    };
                  fn();
                  console.log = log;
                  outputEl.innerText = output;//JSON.stringify(output);
                  cell.output = output;
                }
                
            } catch (err) {
              outputEl.innerText = err.message;
              cell.output = err.message;
            }
              
            function detectCanvasChange(canvas) {
                let currentDataUrl = canvas.toDataURL();
                if (currentDataUrl !== __prevDataUrl) {
                    __prevDataUrl = currentDataUrl;
                    return true;
                }
                return false;
            }
            

            let base64Img = canvas.toDataURL("image/png");
            let imgElement = document.createElement("img");
            imgElement.src = base64Img;
            imgElement.className = "img"
            const imgDiv = cellEl.querySelector(".img");
              
            if(imgDiv){
                imgDiv.remove();
            }

            if( detectCanvasChange(canvas) ){
                if(base64Img!=_black){
                    cellEl.appendChild(imgElement);
                    cell.img = base64Img;
                }
            }

            const outputDiv = cellEl.querySelector(".output");
            if(cell.output != ""){
                if (outputDiv) {
                    outputDiv.remove();
                }
                cellEl.appendChild(outputEl);
            }
              
            renderNotebook();
          });
          //cellEl.appendChild(runBtn);
        cellCont.insertBefore(runBtn, cellCont.firstChild);
            
            // Add event listener to update cells array when CodeMirror content changes
        codeMirrorInstance.on("change", () => {
          cell.content = codeMirrorInstance.getValue();
          cells[index] = cell;
        });
            
        } else if (cell.type === "text") {
          const inputEl = document.createElement("textarea");
          inputEl.value = cell.content;
          inputEl.classList.add("input");
          inputEl.addEventListener("blur", () => {
            cell.content = inputEl.value;
          });
          cellEl.appendChild(inputEl);
        }

        const deleteBtn = document.createElement("button");
        const deletei = document.createElement("i");
        deletei.className = 'bi bi-trash3';
        deleteBtn.appendChild(deletei);
        deleteBtn.addEventListener("click", () => {
          cells.splice(index, 1);
          renderNotebook();
        });
        //cellEl.appendChild(deleteBtn);
        cellCont.insertBefore(deleteBtn, cellCont.firstChild);


        const moveDownBtn = document.createElement("button");
        const moveDown = document.createElement("i");
        moveDown.className = 'bi bi-arrow-down';
        moveDownBtn.appendChild(moveDown);
        moveDownBtn.addEventListener("click", () => {
          if (index < cells.length - 1) {
            const temp = cells[index + 1];
            cells[index + 1] = cell;
            cells[index] = temp;
            renderNotebook();
          }
        });
        //cellEl.appendChild(moveDownBtn);
        cellCont.insertBefore(moveDownBtn, cellCont.firstChild);
        
        const moveUpBtn = document.createElement("button");
        const moveUp = document.createElement("i");
        moveUp.className = 'bi bi-arrow-up';
        moveUpBtn.appendChild(moveUp);
        moveUpBtn.addEventListener("click", () => {
          if (index > 0) {
            const temp = cells[index - 1];
            cells[index - 1] = cell;
            cells[index] = temp;
            renderNotebook();
          }
        });
        //cellEl.appendChild(moveUpBtn);
        cellCont.insertBefore(moveUpBtn, cellCont.firstChild);
        return cellEl;
      };

      const renderNotebook = () => {
        //record current scroll
        const currentScrollPosition = window.scrollY;
          
        const notebookEl = document.getElementById("notebook");
        notebookEl.innerHTML = "";

        cells.forEach((cell, index) => {
        const cellEl = renderCell(cell, index);
         
        notebookEl.appendChild(cellEl);
    });
        //recover scroll
        window.scrollTo(0, currentScrollPosition);
  };

  renderNotebook();

const addCellBtn = document.getElementById("add-cell-btn");
  addCellBtn.addEventListener("click", () => {
  cells.splice(currentCellIndex + 1, 0, { type: "code", content: "", output: "", img: "" });
  currentCellIndex += 1;
  renderNotebook();
});

const addCellTextBtn = document.getElementById("add-cell-text-btn");
  addCellTextBtn.addEventListener("click", () => {
  cells.splice(currentCellIndex + 1, 0, { type: "text", content: "" });
  currentCellIndex += 1;
  renderNotebook();
});

const runCellBtn = document.getElementById("run-cell-btn");
runCellBtn.addEventListener("click", () => {
  const currentCellEl = document.querySelector(`[data-index="${currentCellIndex}"]`);
  const currentCellType = cells[currentCellIndex].type;
  if (currentCellType === "code") {
    const runBtn = currentCellEl.querySelectorAll("button");
    runBtn[3].click();
  }
  if (currentCellIndex < cells.length - 1) {
    currentCellIndex += 1;
    const nextCellEl = document.querySelector(`[data-index="${currentCellIndex}"]`);
    nextCellEl.scrollIntoView();
  }
});

const runAllBtn = document.getElementById("run-all-btn");
runAllBtn.addEventListener("click", () => {
  cells.forEach((cell, index) => {
    if (cell.type === "code") {
      const currentCellEl = document.querySelector(`[data-index="${index}"]`);
      const runBtn = currentCellEl.querySelectorAll("button");
      runBtn[3].click();
    }
  });
});
        
const downloadBtn = document.getElementById("download-btn");
downloadBtn.addEventListener("click", () => {
  const jsonString = JSON.stringify(cells);

  const blob = new Blob([jsonString], { type: 'application/json' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = "JsJupyter.ijsnb";
  link.click();
  
  URL.revokeObjectURL(url);
});
        
const uploadBtn = document.getElementById("upload-btn");
  const fileInput = document.getElementById('file-upload');
  fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    cells = JSON.parse(reader.result);
    renderNotebook();
  };
  reader.readAsText(file);
});

const notebookEl = document.getElementById("notebook");
notebookEl.addEventListener("click", (event) => {
  const clickedCellEl = event.target.closest("[data-index]");
  if (clickedCellEl) {
    currentCellIndex = parseInt(clickedCellEl.getAttribute("data-index"));
  }
});
