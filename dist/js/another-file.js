/*! project-name v0.0.1 | (c) 2021 YOUR NAME | MIT License | http://link-to-your-git-repo.com */
var collapseElementList = [].slice.call(document.querySelectorAll(".collapse"));
var collapseList = collapseElementList.map((function (collapseEl) {
  return new bootstrap.Collapse(collapseEl);
}));
