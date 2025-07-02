# Button

 * Represents a clickable button component that can trigger an action or event when pressed by the user.
 * Typically used to submit forms, initiate processes, or perform interactive tasks within the user interface.

## Types
| Name      | Description                                   | Required | Values                        |
|-----------|-----------------------------------------------|----------|-------------------------------|
| children  | Content to be displayed inside the button      | Yes      | ReactNode, string, elements   |
| onClick   | Function to call when button is clicked        | No       | Function                      |
| className | Additional CSS classes for styling             | No       | string                        |
| disabled  | Disables the button if true                    | No       | boolean                        |
| variant   | Visual style of the button                     | No       | "primary", "secondary"        |

## Usage