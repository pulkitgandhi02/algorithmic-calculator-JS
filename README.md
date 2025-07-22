# Functional Calculator 🧮

A clean, responsive JavaScript calculator with light/dark theme toggle and essential mathematical operations.

![Calculator Demo](https://img.shields.io/badge/Status-Complete-brightgreen) ![HTML](https://img.shields.io/badge/HTML-5-orange) ![CSS](https://img.shields.io/badge/CSS-3-blue) ![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)

## ✨ Features

- **Basic Arithmetic**: Addition, subtraction, multiplication, division
- **Advanced Operations**: Square root (√), Pi (π) constant
- **Memory Functions**: All Clear (AC), Clear Entry (C), Backspace (←)
- **Theme Toggle**: Switch between light and dark modes
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Clean UI**: Modern, intuitive interface with smooth animations
- **Error Handling**: Graceful error management for invalid operations

## 🚀 Demo

[Live Demo](https://pulkit-algorithmic-calculator.netlify.app/)

## 📸 Screenshots

### Light Mode
```
<img width="791" height="873" alt="image" src="https://github.com/user-attachments/assets/2903b10b-5901-477f-bcdf-9adaf87e2bb8" />

```

### Dark Mode  
```
<img width="791" height="873" alt="image" src="https://github.com/user-attachments/assets/c17a78a4-10b6-4db4-a773-0ea98fc1b274" />

```

## 🛠️ Technologies Used

- **HTML5**: Structure and semantic markup
- **CSS3**: Styling with custom properties and grid layout
- **Vanilla JavaScript**: All functionality and interactivity

## 📋 Installation & Usage

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/functional-calculator.git
   cd functional-calculator
   ```

2. **Open in browser**
   ```bash
   # Simply open index.html in your preferred browser
   open index.html
   # Or use a local server
   python -m http.server 8000
   ```

3. **Start calculating!**
   - Click numbers and operators to build expressions
   - Use `=` to evaluate
   - Toggle between light/dark themes
   - Use `AC` to clear everything, `C` to clear current entry
   - Use `←` for backspace functionality

## 🎯 Key Functions

| Button | Function |
|--------|----------|
| `AC` | All Clear - Resets calculator completely |
| `C` | Clear Entry - Clears current number only |
| `←` | Backspace - Removes last entered character |
| `=` | Equals - Evaluates the current expression |
| `√` | Square Root - Calculates square root of current number |
| `π` | Pi - Inserts the value of π (3.14159...) |

## 📁 File Structure

```
functional-calculator/
│
├── index.html          # Main HTML structure
├── styles.css          # CSS styling and themes
├── script.js           # JavaScript functionality
└── README.md          # Project documentation
```

## 🎨 Customization

### Adding New Operations
To add a new mathematical operation:

1. Add the button in `index.html`:
   ```html
   <button class="btn operator" data-value="newOp">Symbol</button>
   ```

2. Handle it in `script.js`:
   ```javascript
   if (value === 'newOp') {
     // Your operation logic here
   }
   ```

### Modifying Themes
Edit the CSS custom properties in `:root` and `body.dark`:

```css
:root {
  --bg-color: #your-color;
  --btn-color: #your-color;
  /* ... other properties */
}
```

## 🐛 Known Issues

- None currently! 🎉

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Pulkit**
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

## 🙏 Acknowledgments

- Inspired by classic calculator designs
- Built with modern web development practices
- Special thanks to the open-source community

---

⭐ **Star this repository if you found it helpful!** ⭐
