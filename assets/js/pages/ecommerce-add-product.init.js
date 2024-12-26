// Initialize select2 elements
$(".select2").select2();

// Initialize Bootstrap tabs
document
  .querySelectorAll(".twitter-bs-wizard-nav .nav-link")
  .forEach(function (tab) {
    var bootstrapTab = new bootstrap.Tab(tab);
    tab.addEventListener("click", function (event) {
      event.preventDefault();
      bootstrapTab.show();
    });
  });

// Document ready function
$(document).ready(function () {
  const tabs = $(".twitter-bs-wizard-tab-content .tab-pane");
  let currentIndex = 0;

  // Function to update the active tab
  function updateTab(index) {
    tabs.removeClass("active show");
    $(tabs[index]).addClass("active show");
    updateButtonState(index);
  }

  // Function to enable/disable Previous/Next buttons
  function updateButtonState(index) {
    const totalTabs = tabs.length;
    $(".twitter-bs-wizard-pager-link .previous a").toggleClass(
      "disabled",
      index === 0
    );
    $(".twitter-bs-wizard-pager-link .next a").toggleClass(
      "disabled",
      index === totalTabs - 1
    );
  }

  // Handle Next button click
  $(".twitter-bs-wizard-pager-link .next a").on("click", function (e) {
    e.preventDefault();
    if (currentIndex < tabs.length - 1) {
      currentIndex++;
      updateTab(currentIndex);
    }
  });

  // Handle Previous button click
  $(".twitter-bs-wizard-pager-link .previous a").on("click", function (e) {
    e.preventDefault();
    if (currentIndex > 0) {
      currentIndex--;
      updateTab(currentIndex);
    }
  });

  // Initialize button states
  updateButtonState(currentIndex);
});
