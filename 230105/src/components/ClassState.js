import React, { Component } from 'react';

export default class ClassState extends Component {
  //   constructor(props) {
  //     super(props),
  //       (this.state = {
  //         teacher: '박도희',
  //       });
  //   }
  state = {
    teacher: '박도희',
  };
  render() {
    const { teacher } = this.state;
    return (
      <div>
        <button onClick={() => this.setState({ teacher: 'dohee' })}>
          영어로
        </button>
        <br />
        <span>{teacher}</span>
      </div>
    );
  }
}
