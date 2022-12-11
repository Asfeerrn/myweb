function addTooltipDelay(className, delay) {
    var listItems = document.getElementsByClassName(className);
    for (var i = 0; i < listItems.length; i++) {
      listItems[i].addEventListener("mouseover", function() {
        setTimeout(function() {
          this.setAttribute("title", this.getAttribute("data-title"));
        }.bind(this), delay);
      });
    }
  }

  
  addTooltipDelay("list-item-1", 1000);
addTooltipDelay("list-item-2", 2000);
addTooltipDelay("list-item-3", 3000);
