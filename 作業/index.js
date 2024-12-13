const sounds = {
      w: 'sounds/crash.mp3',
      a: 'sounds/kick-bass.mp3',
      s: 'sounds/snare.mp3',
      d: 'sounds/tom-1.mp3',
      j: 'sounds/tom-2.mp3',
      k: 'sounds/tom-3.mp3',
      l: 'sounds/tom-4.mp3'
    };
    // 綁定按鈕點擊事件
    document.querySelectorAll('.drum').forEach(button => {
      button.addEventListener('click', () => playSound(button.id));
    });

    // 綁定鍵盤按鍵事件
    document.addEventListener('keydown', (event) => {
      const key = event.key.toLowerCase(); // 取得按鍵 (小寫)
      if (sounds[key]) playSound(key);
    });

    // 播放音效
    // function playSound(key) {
    //   const audio = new Audio(sounds[key]); // 根據按鍵載入音效
    //   audio.play();
    // }
    function playSound(key) {
      const audio = new Audio(sounds[key]); // 根據按鍵載入音效
      audio.play();
      // 確保按鈕在播放音效時已處於 `:active` 狀態
      document.getElementById(key).classList.add('pressed');
      setTimeout(() => {
        document.getElementById(key).classList.remove('pressed');
      }, 100); // 恢復按鈕狀態，時間可以根據需要調整
    }