// Emotion Input
// Expects a div tag with class emotion-input
// Dispatches 'change' event on target element
// event detail: { name, valence, arousal }

document.addEventListener('DOMContentLoaded', () => {
  /*
   angry    astonished excited
   sad      neutral    happy
   annoyed  bored      relaxed
  */
  const emotions = {
    angry: { valence: -1, arousal: 1, emoji: '😠' },
    astonished: { valence: 0, arousal: 1, emoji: '😲' },
    excited: { valence: 1, arousal: 1, emoji: '😃' },
    sad: { valence: -1, arousal: 0, emoji: '😢' },
    neutral: { valence: 0, arousal: 0, emoji: '😐' },
    happy: { valence: 1, arousal: 0, emoji: '😊' },
    annoyed: { valence: -1, arousal: -1, emoji: '😒' },
    bored: { valence: 0, arousal: -1, emoji: '😪' },
    relaxed: { valence: 1, arousal: -1, emoji: '😌' },
  };

  function initializeEmotionInput(div) {
    let checkedLabel;
    Object.entries(emotions).forEach(([name, { emoji, valence, arousal }]) => {
      const label = document.createElement('label');
      const input = document.createElement('input');
      const span = document.createElement('span');
      input.type = 'radio';
      input.name = 'emotion';
      input.value = name;
      if (name === 'neutral') {
        input.checked = 'true';
        label.classList.add('checked');
        checkedLabel = label;
      }
      input.addEventListener('change', (e) => {
        checkedLabel.classList.remove('checked');
        label.classList.add('checked');
        checkedLabel = label;
        e.stopPropagation();
        div.dispatchEvent(new CustomEvent('change', {
          detail: {
            name,
            valence,
            arousal,
          },
        }));
      });
      span.innerText = emoji;
      label.appendChild(input);
      label.appendChild(span);
      div.appendChild(label);
    });
  }

  const divs = document.getElementsByClassName('emotion-input');
  for (let i = 0; i < divs.length; i += 1) {
    const div = divs[i];
    if (!div.dataset.initialized) {
      initializeEmotionInput(div);
      div.dataset.initialized = true;
    }
  }
});
