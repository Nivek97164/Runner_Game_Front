const listBlocks = document.getElementById("listBlocks");

fetch("JSONtest.jmpr")
  .then((response) => response.json())
  .then((data) => {
    var targetElement = document.getElementById("listBlocks");

    if (targetElement) {
      data.blocks.forEach(function (block) {
        var imageUrl;

        switch (block.type) {
          case "B":
            let ItemB = document.createElement("img");
            ItemB.src = "/img/Car1.png";
            targetElement.appendChild(ItemB);
            break;
          case "C":
            let ItemC = document.createElement("img");
            ItemC.src = "/img/Car2.png";
            targetElement.appendChild(ItemC);
            break;
          case "A":
            let ItemA = document.createElement("img");
            ItemA.src = "/img/None.png";
            ItemA.width = 671;
            targetElement.appendChild(ItemA);
        }

        var imageElement = document.createElement("img");
        imageElement.setAttribute("src", imageUrl);
        targetElement.appendChild(imageElement);
      });
    }
  });
