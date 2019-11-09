(function() {

  const serverUrl = 'http://127.0.0.1:3000';

  //
  // TODO: build the swim command fetcher here
  //

  /////////////////////////////////////////////////////////////////////
  // The ajax file uplaoder is provided for your convenience!
  // Note: remember to fix the URL below.
  /////////////////////////////////////////////////////////////////////

  console.log('haha')

  const ajaxFileGet = () => {
    // var formData = new FormData();
    $.ajax({
      type: 'GET',
      url: serverUrl, // changed this
      success: (direction) => {
        console.log('success');
        SwimTeam.move(direction);
      },
      error: () => {
        console.log('fail');
      }
    });
  };

  setInterval(ajaxFileGet, 2000);

  const ajaxFileUplaod = (file) => {
    var formData = new FormData();
    formData.append('file', file);
    $.ajax({
      type: 'POST',
      data: formData,
      url: serverUrl, // changed this
      cache: false,
      contentType: false,
      processData: false,
      success: () => {
        // reload the page
        console.log('ajaxFileUplaod success')
        window.location = window.location.href;
      }
    });
  };

  $('form').on('submit', function(e) {
    e.preventDefault();

    var form = $('form .file')[0];
    if (form.files.length === 0) {
      console.log('No file selected!');
      return;
    }

    var file = form.files[0];
    if (file.type !== 'image/jpeg') {
      console.log('Not a jpg file!');
      return;
    }

    ajaxFileUplaod(file);
  });

})();
