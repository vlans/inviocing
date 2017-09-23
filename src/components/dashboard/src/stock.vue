<template>
  <Row>
    <Col>
      <Row>
        <Col ref="stock" class="stock-map">
        </Col>
      </Row>
    </Col>
  </Row>
</template>
<script>
  export default {
    name: 'dashboard-stock',
    methods: {
      _canvasStock () {
        this.stockMap = window.echarts.init(this.$refs.stock.$el)
        this.stockMap.setOption(this.stockOption)
        this._resizeStock()
      },
      _resizeStock () {
        window.addEventListener('resize', () => {
          this.stockMap.resize()
        })
      }
    },
    mounted () {
      this._canvasStock()
    },
    data () {
      return {
        stockMap: '',
        stockOption: {
          title: {
            text: '库存统计分析'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            bottom: 0,
            data: ['出库', '入库']
          },
          grid: {
            left: '2%',
            right: '2%',
            bottom: '15%',
            containLabel: true
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: '出库',
              type: 'line',
              stack: '总量',
              data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
              name: '入库',
              type: 'line',
              stack: '总量',
              data: [220, 182, 191, 234, 290, 330, 310]
            }
          ]
        }
      }
    }
  }
</script>
<style lang="scss">
  .stock-map {
    height: 300px;
  }
</style>
