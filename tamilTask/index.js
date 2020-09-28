var bigBox = document.getElementById("main");
var littleBox = document.getElementById("sub");

var horizontalStart = 0;
var horizontalEnd = getHorizontalEnd();
var verticalStart = 0;
var verticalEnd = getVerticalEnd();

console.log({ horizontalEnd, verticalEnd });

var littleBoxStyle;
var topValue;
var leftValue;
var width;
var height;

function forward() {
  littleBoxStyle = window.getComputedStyle(littleBox);
  getPosition();

  if (topValue === verticalStart && leftValue === horizontalStart) {
    littleBox.style.left = 100 - (width - 100) + "%";
    getPosition();
  } else if (topValue === verticalStart && leftValue === horizontalEnd) {
    littleBox.style.top = height - 100 + "%";
    littleBox.style.left = 0 + "%";
    getPosition();
  } else if (topValue < verticalEnd && leftValue === horizontalStart) {
    if (topValue > height) {
      littleBox.style.left = 100 - (width - 100) + "%";
      getPosition();
    } else {
      littleBox.style.left = 100 - (width - 100) + "%";
      getPosition();
    }
  } else if (topValue < verticalEnd && leftValue === horizontalEnd) {
    if (topValue === height) {
      littleBox.style.top = 50 + "%";
      littleBox.style.left = 0 + "%";
      getPosition();
    } else if (topValue > height) {
      littleBox.style.top = 75 + "%";
      littleBox.style.left = 0 + "%";
      getPosition();
    }
  } else if (topValue === verticalEnd && leftValue === horizontalStart) {
    littleBox.style.left = 100 - (width - 100) + "%";
    getPosition();
  } else if (topValue === verticalEnd && leftValue === horizontalEnd) {
    alert("You have reached the end");
  }
}

function backward() {
  littleBoxStyle = window.getComputedStyle(littleBox);
  getPosition();

  if (topValue === verticalStart && leftValue === horizontalStart) {
    alert("You haven't move the box yet!");
  } else if (topValue === verticalStart && leftValue === horizontalEnd) {
    littleBox.style.left = 0 + "%";
    getPosition();
  } else if (topValue < verticalEnd && leftValue === horizontalStart) {
    if (topValue === height) {
      littleBox.style.left = 100 - (width - 100) + "%";
      littleBox.style.top = 0 + "%";
      getPosition();
    } else if (topValue > height) {
      littleBox.style.top = 25 + "%";
      littleBox.style.left = 100 - (width - 100) + "%";
      getPosition();
    }
  } else if (topValue < verticalEnd && leftValue === horizontalEnd) {
    if (topValue === height) {
      littleBox.style.left = 0 + "%";
      getPosition();
    } else if (topValue > height) {
      littleBox.style.left = 0 + "%";
      getPosition();
    }
  } else if (topValue === verticalEnd && leftValue === horizontalStart) {
    littleBox.style.left = 100 - (width - 100) + "%";
    littleBox.style.top = 50 + "%";
    getPosition();
  } else if (topValue === verticalEnd && leftValue === horizontalEnd) {
    littleBox.style.left = 0 + "%";
  }
}

function getCeilValue(value) {
  return Math.ceil(value);
}

function getPosition(value) {
  topValue = getCeilValue(
    littleBoxStyle.getPropertyValue("top").replace("px", "")
  );
  leftValue = getCeilValue(
    littleBoxStyle.getPropertyValue("left").replace("px", "")
  );
  width = getCeilValue(
    littleBoxStyle.getPropertyValue("width").replace("px", "")
  );
  height = getCeilValue(
    littleBoxStyle.getPropertyValue("height").replace("px", "")
  );
  console.log({ topValue, leftValue, width, height });
}

function getHorizontalEnd() {
  return (
    Math.ceil(
      window
        .getComputedStyle(bigBox)
        .getPropertyValue("width")
        .replace("px", "")
    ) -
    Math.ceil(
      window
        .getComputedStyle(littleBox)
        .getPropertyValue("width")
        .replace("px", "")
    )
  );
}

function getVerticalEnd() {
  return (
    Math.ceil(
      window
        .getComputedStyle(bigBox)
        .getPropertyValue("height")
        .replace("px", "")
    ) -
    Math.ceil(
      window
        .getComputedStyle(littleBox)
        .getPropertyValue("height")
        .replace("px", "")
    )
  );
}
