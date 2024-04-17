# 文件转Base64

```javascript
    <template>
      <div>
        <img src="../assets/vue.svg" mode="scaleToFill" />
        <span class="kicon-iconfont kicon-search-icon"></span>
      </div>
    </template>
    
    <script>
    export default {
      mounted() {
        // fetch("http://localhost:5173/src/assets/home-icon-search-white.svg")
        //   .then((res) => res.text())
        //   .then((svgText) => {
        //     const img = new Image();
        //     img.onload = () => {
        //       // 将SVG图像转为Base64编码
        //       const canvas = document.createElement("canvas");
        //       canvas.width = img.width;
        //       canvas.height = img.height;
        //       const ctx = canvas.getContext("2d");
        //       ctx.drawImage(img, 0, 0);
        //       const base64 = canvas.toDataURL("image/png");
        //       console.log(base64); // 输出Base64编码
        //     };
        //     img.src = 'data:image/svg+xml;base64,' + btoa(svgText);
        //   });
        // fetch("http://localhost:5173/src/assets/home-icon-search-white.svg")
        //   .then((res) => res.text())
        //   .then((svgText) => {
        //     const img = new Image();
        //     img.onload = () => {
        //       // 将SVG图像转为Base64编码
        //       const canvas = document.createElement("canvas");
        //       canvas.width = img.width;
        //       canvas.height = img.height;
        //       const ctx = canvas.getContext("2d");
        //       ctx.drawImage(img, 0, 0);
        //       const base64 = canvas.toDataURL("image/png");
        //       console.log(base64); // 输出Base64编码
        //     };
        //     img.src = 'data:font/truetype;charset=uft-8;base64,' + btoa(svgText);
        //   });
        fetch("http://localhost:5173/src/assets/icon/icon.ttf")
          .then((response) => response.blob())
          .then((blob) => {
            const reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = () => {
              const base64data = reader.result;
              console.log(base64data);
            };
          });
      },
      methods: {},
    };
    </script>
    
    <style lang="scss" scoped>
    </style>
```