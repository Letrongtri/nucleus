# Textfield
* Represents an input field where users can enter and edit text.
* Commonly used in forms to collect user information such as names, emails, or search queries.

## Types
| Name        | Description                                             | Required | Values                              |
|-------------|---------------------------------------------------------|----------|-------------------------------------|
| label       | Label for the textfield                                 | No       | string                              |
| placeholder | Placeholder text shown when input is empty              | No       | string                              |
| value       | Current value of the textfield                          | No       | string                              |
| disabled    | Disables the textfield if true                          | No       | boolean                             |
| onChange    | Function called when the value changes                  | Yes      | Function                            |
| className   | Additional CSS classes for styling                      | No       | string                              |
| type        | Type of input                                           | No       | "text", "password"                  |

## Usage