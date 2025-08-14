let currentlyOpenModule = null;
let isModuleSectionVisible = false;

// Toggle Modules Section Show/Hide
function showModules() {
  const moduleSection = document.getElementById("modules-section");

  if (isModuleSectionVisible) {
    moduleSection.classList.add("hidden");
    currentlyOpenModule = null;

    // Reset all modules to default state
    const allModules = document.querySelectorAll(".module");
    allModules.forEach(mod => {
      mod.classList.remove("expanded");
      mod.querySelector(".module-preview").classList.add("hidden");
      mod.style.display = "block";
    });

  } else {
    moduleSection.classList.remove("hidden");
    moduleSection.scrollIntoView({ behavior: "smooth" });
  }

  isModuleSectionVisible = !isModuleSectionVisible;
}

// Module Expansion/Collapse
function toggleModule(moduleDiv) {
  const allModules = document.querySelectorAll(".module");
  const preview = moduleDiv.querySelector(".module-preview");

  if (currentlyOpenModule === moduleDiv) {
    // Collapse the module
    allModules.forEach(mod => {
      mod.classList.remove("expanded");
      mod.querySelector(".module-preview").classList.add("hidden");
      mod.style.display = "block";
    });
    currentlyOpenModule = null;
  } else {
    // Expand the clicked module, hide others
    allModules.forEach(mod => {
      if (mod === moduleDiv) {
        mod.classList.add("expanded");
        mod.querySelector(".module-preview").classList.remove("hidden");
        mod.style.display = "block";
      } else {
        mod.classList.remove("expanded");
        mod.querySelector(".module-preview").classList.add("hidden");
        mod.style.display = "none";
      }
    });
    currentlyOpenModule = moduleDiv;
  }
}
