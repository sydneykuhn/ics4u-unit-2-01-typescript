/**
 * The program is a class.
 *
 * By:      Sydney Kuhn
 * Version: 1.0
 * Since:   2020-10-26
 */

class SydneyStack {
  // Create Array
  private readonly stackNum: number[] = []

  // Process
  Push(pushedNum: number): void {
    this.stackNum.push(pushedNum)
  }

  // Output
  StackArray(): void {
    console.log(this.stackNum)
  }
}

// Export File
export = SydneyStack
