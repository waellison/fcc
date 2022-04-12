$(document).ready((e) => {
  let updatePreview = (e) => {
    $("#preview").html(
      marked.parse($("#editor").val(), {gfm: true, breaks: true})
    );
  };
  
  $("#editor").on("keyup", updatePreview);
  updatePreview();
});
