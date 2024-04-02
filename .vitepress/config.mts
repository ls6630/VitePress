import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Note",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '前端', link: '/FrontEnd/' },
      { text: '后端', link: '/BackEnd/' },
      { text: '系统', link: '/System/' },
      { text: '软件', link: '/Software/' },
      { text: '其他', link: '/Software/' },
    ],
    sidebar: {
      '/FrontEnd/': [
        {
          text: "包管理工具",
          collapsed: true,
          items: [
            {
              text: "npm",
              link: ""
            }
          ]
        },
        {
          text: "开发工具",
          collapsed: true,
          items: [
            {
              text: "vscode",
              link: ""
            }
          ]
        },
        {
          text: "Vue",
          collapsed: true,
          items: [
            {
              text: "1",
              link: ""
            }
          ]
        },
        {
          text: "uni-app",
          collapsed: true,
          items: [
            {
              text: "1",
              link: ""
            }
          ]
        },
        {
          text: "Electron",
          collapsed: true,
          items: [
            {
              text: "1",
              link: ""
            }
          ]
        },
        {
          text: "HarmonyOS",
          collapsed: true,
          items: [
            {
              text: "1",
              link: ""
            }
          ]
        },
        {
          text: "Android",
          collapsed: true,
          items: [
            {
              text: "1",
              link: ""
            }
          ]
        }
      ],
      '/BackEnd/': [
        {
          text: "JAVA",
          collapsed: true,
          items: [
            {
              text: "1",
              link: ""
            }
          ]
        },
        {
          text: "开发工具",
          collapsed: true,
          items: [
            {
              text: "npm",
              link: ""
            }
          ]
        },
        {
          text: "MySQL",
          collapsed: true,
          items: [
            {
              text: "1",
              link: ""
            }
          ]
        },
        {
          text: "Redis",
          collapsed: true,
          items: [
            {
              text: "1",
              link: ""
            }
          ]
        },
        {
          text: "Node.js",
          collapsed: true,
          items: [
            {
              text: "1",
              link: ""
            }
          ]
        }
      ],
      '/System/': [
        {
          text: "Windows",
          collapsed: true,
          items: [
            {
              text: "系统镜像",
              link: ""
            },
            {
              text: "系统驱动",
              link: ""
            },
            {
              text: "系统软件",
              link: ""
            }
          ]
        },
        {
          text: "Linux",
          collapsed: true,
          items: [
            {
              text: "系统镜像",
              link: ""
            },
            {
              text: "系统驱动",
              link: ""
            },
            {
              text: "系统软件",
              link: ""
            }
          ]
        }
      ],
      '/Software/': [
        {
          text: "图形图像",
          link: "/"
        },
        {
          text: "实用工具",
          link: "/"
        },
        {
          text: "影视音频",
          link: "/"
        },
      ]
    },
    socialLinks: [],
  }
})
