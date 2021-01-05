let tabs = document.querySelector(".tabs");
let tabButtons = document.querySelectorAll('[role="tab"]');
let tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleTabClick(event) {
  // hide all tab panels
  tabPanels.forEach((panel) => (panel.hidden = true));
  // mark all tabs as unselected
  tabButtons.forEach((tab) => {
    tab.setAttribute("aria-selected", false);
  });
  // mark the clicked tab as selected
  event.currentTarget.setAttribute("aria-selected", true);
  // find the associated tabPanel and show it
  let { id } = event.currentTarget;
  let tabPanel = tabPanels.find(
    (panel) => panel.getAttribute("aria-labelledby") === id
  );
  tabPanel.hidden = false;
}

tabButtons.forEach((button) =>
  button.addEventListener("click", handleTabClick)
);
