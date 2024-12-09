const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    performance: {
      hints: false,
      maxEntrypointSize: 512000, // กำหนดขนาดสูงสุดของ entrypoint (512 KB)
      maxAssetSize: 512000 // กำหนดขนาดสูงสุดของ asset แต่ละไฟล์ (512 KB)
    }
  }
})
