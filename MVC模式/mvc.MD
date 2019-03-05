#mvc模式  软件架构设计模式
M-------------------> Model(模型),用于封装与业务逻辑相关的数据及数据处理方法.
V-------------------> View(视图),用于数据展示和响应用户操作
C-------------------> Controller(控制层),


View 接受用户交互请求
View 将请求转交给Controller
Controller 操作Model进行数据更新
数据更新之后，Model通知View更新数据变化.PS: 还有一种是View作为Observer监听Model中的任意更新，一旦有更新事件发出，View会自动触发更新以展示最新的Model状态.这种方式提升了整体效率，简化了Controller的功能，不过也导致了View与Model之间的紧耦合。
View 更新变化数据
