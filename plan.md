# 4-quadrants-to-do Todo List - Feature Plan

## 项目概述
基于 MotherDuck 设计系统构建的四象限待办事项管理应用，采用 Eisenhower Matrix（艾森豪威尔矩阵）时间管理方法。

## 核心功能

### 1. 四象限任务管理
- **Do First（紧急且重要）** - 红色 (#FF6B6B)
- **Schedule（不紧急但重要）** - 蓝色 (#6FC2FF)
- **Delegate（紧急但不重要）** - 黄色 (#FFD500)
- **Eliminate（不紧急且不重要）** - 青色 (#4DD4D0)

每个象限支持：
- 添加新任务（+ ADD 按钮）
- 任务复选框标记完成状态
- 删除任务（× 按钮）
- 固定 300px 高度，超出时滚动显示

### 2. 拖拽功能
- 任务项可拖拽移动
- 支持象限内重新排序
- 支持跨象限拖拽移动
- 拖拽时视觉反馈（透明度变化、拖拽区域高亮）
- HTML5 Drag and Drop API 实现

### 3. 数据持久化
- 使用 localStorage 保存所有任务数据
- 页面刷新后数据不丢失
- 首次访问时自动加载演示任务
- 实时自动保存

### 4. 统计功能
包含两种视图模式：

#### Chart View（图表视图）
- **概览统计卡片**
  - 总任务数
  - 已完成任务数
  - 待处理任务数
  - 完成率百分比

- **饼图（Doughnut Chart）**
  - 展示各象限任务分布
  - 使用象限对应颜色
  - 交互式 tooltip

- **柱状图（Bar Chart）**
  - 对比各象限的完成/待处理任务
  - 双柱对比（已完成 vs 待处理）
  - 使用 Chart.js 4.4.1 实现

#### List View（列表视图）
- **象限摘要卡片**
  - 每个象限的总数/已完成/待处理统计

- **详细任务列表**
  - 按象限分组显示所有任务
  - 显示任务状态（✓ DONE / ⏳ PENDING）
  - 已完成任务带删除线样式

### 5. 用户界面功能
- **Header 区域**
  - 黄色背景 (#FFD500)
  - 标题："FOUR Quadrants-to-do"
  - CLEAR ALL 按钮（批量清空所有任务）
  - STATISTICS 按钮（打开统计模态框）

- **主内容区域**
  - 响应式网格布局（lg:grid-cols-2）
  - 四个象限卡片
  - 底部统计卡片（各象限任务数量）

- **模态框**
  - 添加任务模态框（文本输入 + 确认/取消）
  - 统计模态框（图表/列表视图切换）
  - 点击背景或按 ESC 键关闭

- **Footer 区域**
  - 白色背景
  - MotherDuck 品牌标识

### 6. 交互优化
- **快捷键支持**
  - ESC 键关闭模态框

- **视觉反馈**
  - 按钮 hover 效果：位移 + 阴影
  - 任务项 hover：浅蓝色背景 (#E5F4FF)，无渐变
  - 自定义复选框样式
  - 拖拽时 50% 透明度

- **滚动条优化**
  - 宽度：6px
  - 颜色：米色 (#F4EFEA)，hover 时变深
  - 内容右侧 8px 间距
  - 跨浏览器支持（Webkit + Firefox）

### 7. 安全性
- XSS 防护：使用 `escapeHtml()` 处理用户输入
- 无外部数据请求，纯前端应用

## 技术栈
- **HTML5** - 语义化标签、Drag and Drop API
- **Tailwind CSS** - 实用工具类样式
- **Vanilla JavaScript** - 无框架依赖
- **Chart.js 4.4.1** - 数据可视化
- **LocalStorage API** - 客户端存储
- **Inter 字体** - Google Fonts

## 设计规范（MotherDuck Style）
- **颜色系统**
  - 主背景：#F4EFEA（米色）
  - 文字：#383838（深灰）
  - 蓝色：#6FC2FF
  - 黄色：#FFD500
  - 青色：#4DD4D0
  - 红色：#FF6B6B

- **边框**
  - 统一 2px solid #383838
  - 无圆角（brutalist 风格）

- **按钮**
  - Hover 位移：translate(-2px, -2px)
  - Shadow：4px 4px 0px 0px #383838
  - 120ms 过渡动画

- **排版**
  - 字体：Inter
  - 标题：bold, tracking-tight
  - 正文：regular, leading-relaxed

## 文件结构
```
super-desgin/
├── todo-quadrant.html      # 主应用文件（单文件应用）
├── STYLE_GUIDE.md          # 设计系统参考
├── UI.html                 # MotherDuck 原始 UI 参考
└── plan.md                 # 本文档
```

## 未来可能的扩展
- 任务优先级标记
- 到期日期提醒
- 任务标签/分类
- 导出功能（JSON/CSV）
- 暗黑模式
- 任务搜索功能
- 任务编辑功能
- 多用户支持（需要后端）
