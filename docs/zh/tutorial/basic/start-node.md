# 开始节点

开始节点是 Magic 中任何流程的入口点。它定义了流程如何开始以及接收什么初始数据。

## 概述

开始节点是流程中的第一个节点，不能从输入端连接到任何其他节点。它只能有输出连接。

## 配置

### 基本设置

- **名称**：节点的唯一标识符
- **描述**：节点用途的可选描述
- **类型**：设置为"开始"（只读）

### 输入参数

开始节点可以配置为接受各种类型的输入：

1. **HTTP 请求**
   - 方法（GET、POST、PUT、DELETE）
   - 请求头
   - 查询参数
   - 请求体

2. **Webhook**
   - URL
   - 认证
   - 负载格式

3. **定时任务**
   - Cron 表达式
   - 时区
   - 重复选项

## 使用示例

### HTTP 端点

```javascript
// HTTP 端点的开始节点配置示例
{
  "type": "start",
  "config": {
    "method": "POST",
    "path": "/api/process",
    "headers": {
      "Content-Type": "application/json"
    }
  }
}
```

### 定时任务

```javascript
// 定时任务的开始节点配置示例
{
  "type": "start",
  "config": {
    "schedule": "0 0 * * *",  // 每天午夜运行
    "timezone": "UTC"
  }
}
```

## 最佳实践

1. **命名规范**
   - 使用描述性的名称，表明用途
   - 在名称中包含触发类型（例如："HTTP_开始"、"定时_开始"）

2. **错误处理**
   - 始终验证输入数据
   - 包含适当的错误响应
   - 记录重要事件

3. **安全性**
   - 实施适当的认证
   - 验证输入数据
   - 对 HTTP 端点使用 HTTPS

## 常见问题

1. **无效配置**
   - 检查 HTTP 端点的方法和路径
   - 验证定时任务的 cron 表达式
   - 确保所有必填字段都已填写

2. **连接问题**
   - 验证网络连接
   - 检查防火墙设置
   - 验证 SSL 证书

## 相关节点

- [回复节点](./reply-node.md)
- [等待节点](./wait-node.md)
- [结束节点](./end-node.md) 