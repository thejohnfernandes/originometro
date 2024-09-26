
# Contra Celso and Originometer

This project contains two main pages: one addressing the philosopher Celsus and his critique of early Christianity, and another featuring a gauge called "Originometer," which reflects how closely a group aligns with Origen's teachings.

## Pages

### 1. Contra Celso

This page introduces the philosopher Celsus, a critic of Christianity in the 2nd century. Users can interact with the content by responding to Celsus' arguments through a simple form. The page uses a dark-themed layout inspired by Twitter's dark mode.

- **Technologies used**:
  - HTML5 and CSS3
  - Bootstrap 4.5.2
  - JavaScript for form handling

#### Features:
- **Visual style**:
  - Dark background inspired by Twitter's dark theme
  - Buttons styled in Twitter blue
- **Interactivity**:
  - A form that allows users to respond to Celsus' arguments
  - A thank-you message is displayed after the response is submitted

### 2. Originometer

This page contains a gauge called "Originometer" that uses a gauge chart to reflect how closely a group aligns with the teachings of Origen, an early Christian theologian from Alexandria. The gauge is created using the Highcharts library.

- **Technologies used**:
  - Highcharts for gauge charts
  - Bootstrap 4.5.2 for responsive layout
  - HTML5 and CSS3 for structure and styling

#### Features:
- **Visual style**:
  - Dark-themed layout inspired by Twitter
  - Responsive content displayed in cards
  - Interactive gauge charts using Highcharts
- **Gauge Chart**:
  - Displays the "Alexandrian alignment" of the group

## Project Structure

\`\`\`plaintext
├── index.html             # Main page 'Contra Celso'
├── originometro.html       # 'Originometer' page
├── css/
│   └── styles.css          # Custom styles
├── js/
│   └── formHandler.js      # Form handling for Contra Celso
│   └── originometro.js     # Gauge chart setup for Originometer
├── images/
│   └── loading.gif         # Loading icon
│   └── favicon.ico         # Website icon
├── README.md               # This file
\`\`\`

## How to Run the Project

1. Clone the repository:

   \`\`\`bash
   git clone https://github.com/user/project.git
   \`\`\`

2. Open the \`index.html\` or \`originometro.html\` file in your browser.

3. To view the gauge chart, the \`originometro.html\` page requires an internet connection to load the Highcharts and Bootstrap libraries.

## External Dependencies

- **Highcharts**: Used to render the gauge chart on the Originometer page. The library is loaded from the Highcharts CDN.
- **Bootstrap**: Used for responsive layout and visual styling.
- **jQuery**: Used for basic DOM manipulation and compatibility with Bootstrap scripts.

## Styling

The project uses a dark theme inspired by Twitter for both pages. The background is predominantly dark, with light text to improve readability and reduce eye strain.

## Future Improvements

- **Form Validation**: Improve form validation on the "Contra Celso" page.
- **Backend Integration**: Implement an API to store user responses submitted through the form.
- **More Interactive Charts**: Expand the Originometer page with additional charts or statistics about the group's alignment.

## Contribution

Feel free to open **Issues** or submit **Pull Requests** with suggestions and improvements.

## License

This project is licensed under the MIT License. See the \`LICENSE\` file for more details.
