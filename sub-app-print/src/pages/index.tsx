import { Component } from 'react';

// @ts-ignore
import ngfePrint from '../utils/utils';
import NeedPrintedTable from './NeedPrintedTable';

class IndexPage extends Component {
  handleClick = () => {
    // 要打印的 DOM
    const content: HTMLElement = document.getElementById('printDivTable')!;
    // 传入要打印的DOM
    ngfePrint(content);
  };

  render() {
    const { handleClick } = this;
    return (
      <>
        <button onClick={handleClick}>打印</button>
        <div style={{ breakBefore: 'always' }}>
          <NeedPrintedTable />
        </div>
      </>
    );
  }
}

export default IndexPage;
