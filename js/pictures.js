'use strict';

(function () {
  var photoTemplate = document.querySelector('#picture-template').content;

  var renderPhoto = function (obj) {
    var photoElement = photoTemplate.cloneNode(true);

    photoElement.querySelector('.picture').setAttribute('data-id', obj.id);
    photoElement.querySelector('img').setAttribute('src', obj.url);
    photoElement.querySelector('.picture-likes').textContent = obj.likes;
    photoElement.querySelector('.picture-comments').textContent = obj.comments.length;

    return photoElement;
  };

  window.pictures = {
    listElement: document.querySelector('.pictures'),
    fillDOM: function (arr) {
      var fragment = document.createDocumentFragment();

      arr.forEach(function (currentValue) {
        fragment.appendChild(renderPhoto(currentValue));
      });

      window.pictures.listElement.innerHTML = '';
      window.pictures.listElement.appendChild(fragment);
    }
  };
})();
