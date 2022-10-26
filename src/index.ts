/**
 * The program is the
 * "Mr Coxall Stack"
 *
 * By:      Sydney Kuhn
 * Version: 1.0
 * Since:   2020-10-26
 */

// Import
import SydneyStack from './SydneyStack'
import promptSync from 'prompt-sync'

// Define Constants
const prompt = promptSync()
const stackNum = new SydneyStack()

// Input
const userInput = Number(prompt('Enter a Number: '))
stackNum.Push(userInput)

// Process
stackNum.StackArray()

// Output
console.log('\nDone.')
