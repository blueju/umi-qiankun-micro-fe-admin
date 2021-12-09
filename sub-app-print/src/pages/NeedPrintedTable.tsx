import React from 'react';
import styles from './index.less';

class NeedPrintedTable extends React.Component<any, any> {
  generateForm = () => {
    let listSize =
      this.props.caseData != undefined ? this.props.caseData.length : 0;
    if (listSize <= 6) {
      return this.generateSingleForm([], listSize);
    } else {
      let newList = [];
      let temp = [];
      for (let i = 0, j = 1; i < listSize; i++) {
        if (i == j * 6) {
          newList.push(temp);
          temp = [];
          j++;
        }
        temp.push(this.props.caseData[i]);
      }
      newList.push(temp);
      return newList.map((itemList: any) => {
        return this.generateSingleForm([], itemList.length);
      });
    }
  };
  generateSingleForm = (dataList: [], listSize: number) => {
    let l = 6 - listSize;
    let newList: any[] = [];
    if (l > 0) {
      for (let i = 0; i < l; i++) {
        newList.push({});
      }
    }
    return (
      <div style={{ pageBreakBefore: 'always' }}>
        <table
          id="printDivTable"
          cellPadding="0"
          cellSpacing="0"
          style={{
            borderCollapse: 'collapse',
            border: '0',
            tableLayout: 'fixed',
          }}
        >
          <colgroup>
            <col style={{ width: '40pt' }}></col>
            <col style={{ width: '47pt' }}></col>
            <col style={{ width: '46pt' }}></col>
            <col style={{ width: '213pt' }}></col>
            <col style={{ width: '49pt' }}></col>
            <col style={{ width: '41pt' }}></col>
            <col style={{ width: '31pt' }}></col>
            <col style={{ width: '29pt' }}></col>
            <col style={{ width: '40pt' }}></col>
          </colgroup>

          <tr style={{ height: '57.95pt' }}>
            <td
              className={styles.xl65}
              width="53.5"
              style={{ height: '0pt', width: '40pt' }}
            ></td>
            <td
              className={styles.xl65}
              width="62"
              style={{ width: '47pt' }}
            ></td>
            <td
              className={styles.xl65}
              width="61"
              style={{ width: '46pt' }}
            ></td>
            <td
              className={styles.xl65}
              width="284"
              style={{ width: '213pt' }}
            ></td>
            <td
              className={styles.xl65}
              width="65"
              style={{ width: '49pt' }}
            ></td>
            <td
              className={styles.xl65}
              width="54"
              style={{ width: '41pt' }}
            ></td>
            <td
              className={styles.xl65}
              width="41"
              style={{ width: '31pt' }}
            ></td>
            <td
              className={styles.xl65}
              width="39"
              style={{ width: '29pt' }}
            ></td>
            <td
              className={styles.xl65}
              width="53.5"
              style={{ height: '0pt', width: '40pt' }}
            ></td>
          </tr>
          <tr style={{ height: '57.95pt' }}>
            <td
              className={styles.xl66}
              width="107"
              style={{ height: '57.95pt', width: '40pt' }}
            ></td>
            <td
              colSpan={7}
              className={styles.xl76}
              width="606"
              style={{ width: '456pt' }}
            >
              案<span>&nbsp;&nbsp;&nbsp; </span>卷
              <span>&nbsp;&nbsp;&nbsp;</span>目<span>&nbsp;&nbsp;&nbsp; </span>
              录
            </td>
          </tr>
          <tr style={{ height: '44.1pt' }}>
            <td
              className={styles.xl67}
              width="107"
              style={{ height: '44.1pt', width: '80pt' }}
            ></td>
            <td className={styles.xl68} width="62" style={{ width: '47pt' }}>
              卷 号
            </td>
            <td
              className={styles.xl68}
              width="61"
              style={{ borderLeft: 'none', width: '46pt' }}
            >
              归档号
            </td>
            <td
              className={styles.xl68}
              width="284"
              style={{ borderLeft: 'none', width: '213pt' }}
            >
              题
              <span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>
              名
            </td>
            <td
              className={styles.xl68}
              width="65"
              style={{ borderLeft: 'none', width: '49pt' }}
            >
              起 止 日 期
            </td>
            <td
              className={styles.xl68}
              width="54"
              style={{ borderLeft: 'none', width: '41pt' }}
            >
              卷 内 页 数
            </td>
            <td
              className={styles.xl68}
              width="41"
              style={{ borderLeft: 'none', width: '31pt' }}
            >
              保管期限
            </td>
            <td
              className={styles.xl68}
              width="39"
              style={{ borderLeft: 'none', width: '29pt' }}
            >
              备注
            </td>
            <td
              className={styles.xl66}
              width="107"
              style={{ borderLeft: 'none', width: '40pt' }}
            ></td>
          </tr>
          {dataList.map((item: any) => {
            return (
              <tr style={{ height: '95.1pt' }}>
                <td
                  className={styles.xl67}
                  style={{ height: '95.1pt', width: '80pt' }}
                ></td>
                <td
                  className={styles.xl69}
                  style={{ borderTop: 'none', width: '47pt' }}
                >
                  {item.caseNo}
                </td>
                <td
                  className={styles.xl70}
                  style={{ borderTop: 'none', borderLeft: 'none' }}
                >
                  {item.gtrAcvsNo}
                </td>
                <td
                  className={styles.xl71}
                  style={{
                    borderTop: 'none',
                    borderLeft: 'none',
                    width: '213pt',
                  }}
                >
                  　　{item.titleNm}
                </td>
                <td
                  className={styles.xl72}
                  style={{
                    borderTop: 'none',
                    borderLeft: 'none',
                    width: '49pt',
                  }}
                >
                  <span style={{ width: '49pt', textAlign: 'center' }}>
                    {item.bgnDate}
                  </span>
                  <br />
                  <span style={{ width: '49pt', textAlign: 'center' }}>/</span>
                  <br />
                  <span style={{ width: '49pt', textAlign: 'center' }}>
                    {item.endDate}
                  </span>
                </td>
                <td
                  className={styles.xl73}
                  style={{
                    borderTop: 'none',
                    borderLeft: 'none',
                    width: '41pt',
                  }}
                >
                  {item.pageNum}
                </td>
                <td
                  className={styles.xl74}
                  style={{
                    borderTop: 'none',
                    borderLeft: 'none',
                    width: '31pt',
                  }}
                >
                  keepTerm[item.keepTerm]
                </td>
                <td
                  className={styles.xl74}
                  style={{
                    borderTop: 'none',
                    borderLeft: 'none',
                    width: '29pt',
                  }}
                >
                  {item.remark}
                </td>
                <td
                  className={styles.xl67}
                  style={{
                    borderTop: 'none',
                    borderLeft: 'none',
                    width: '80pt',
                  }}
                ></td>
              </tr>
            );
          })}
          {newList.length > 0 ? (
            newList.map((item: any) => {
              return (
                <tr style={{ height: '95.1pt' }}>
                  <td
                    className={styles.xl67}
                    style={{ height: '95.1pt', width: '80pt' }}
                  ></td>
                  <td
                    className={styles.xl69}
                    style={{ borderTop: 'none', width: '47pt' }}
                  ></td>
                  <td
                    className={styles.xl70}
                    style={{ borderTop: 'none', borderLeft: 'none' }}
                  ></td>
                  <td
                    className={styles.xl71}
                    style={{
                      borderTop: 'none',
                      borderLeft: 'none',
                      width: '213pt',
                    }}
                  >
                    　　
                  </td>
                  <td
                    className={styles.xl72}
                    style={{
                      borderTop: 'none',
                      borderLeft: 'none',
                      width: '49pt',
                    }}
                  >
                    <span style={{ width: '49pt', textAlign: 'center' }}></span>
                    <br />
                    <span style={{ width: '49pt', textAlign: 'center' }}></span>
                    <br />
                    <span style={{ width: '49pt', textAlign: 'center' }}></span>
                  </td>
                  <td
                    className={styles.xl73}
                    style={{
                      borderTop: 'none',
                      borderLeft: 'none',
                      width: '41pt',
                    }}
                  ></td>
                  <td
                    className={styles.xl74}
                    style={{
                      borderTop: 'none',
                      borderLeft: 'none',
                      width: '31pt',
                    }}
                  ></td>
                  <td
                    className={styles.xl74}
                    style={{
                      borderTop: 'none',
                      borderLeft: 'none',
                      width: '29pt',
                    }}
                  ></td>
                  <td
                    className={styles.xl67}
                    style={{
                      borderTop: 'none',
                      borderLeft: 'none',
                      width: '80pt',
                    }}
                  ></td>
                </tr>
              );
            })
          ) : (
            <></>
          )}
        </table>
      </div>
    );
  };
  render() {
    return <>{this.generateForm()}</>;
  }
}

export default NeedPrintedTable;
