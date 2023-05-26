import Template from './Item';

export default {
  title: 'Basic/Item', // 스토리 분류 및 컴포넌트 이름
  component: Template, // 테스트할 컴포넌트(Divider)
  parameters: {
    backgrounds: {
      default: 'light'
    }
  },
  controls: { hideNoControlsWarning: true } // 컨트롤 경고 메시지 숨김 설정
};

export const Primary = {
  args: {
    data: {
      id: 48,
      type: 'Product',
      title: '나이키 트레일 페가수스',
      sub_title: null,
      brand_name: null,
      price: '183330',
      discountPercentage: 40,
      image_url:
        'https://images.unsplash.com/photo-1587245937293-b0510ee4c2be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
      brand_image_url: null,
      follower: null
    }
  },
  render: props => <Template {...props} />
};