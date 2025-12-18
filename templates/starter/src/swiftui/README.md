# SwiftUI Web Runtime Components

## Component Documentation

### VStack

**Status:** ✅ Production Ready
**SwiftUI Mapping:** `VStack(alignment: .center, spacing: 8)` -> `<VStack alignment="center" spacing={8} />`
**Notes:** Uses `flex-col` for layout. Supports `alignment` (leading, center, trailing) and `spacing` props.

### HStack

**Status:** ✅ Production Ready
**SwiftUI Mapping:** `HStack(alignment: .center, spacing: 8)` -> `<HStack alignment="center" spacing={8} />`
**Notes:** Uses `flex-row` for layout. Supports `alignment` (top, center, bottom) and `spacing` props.

### Spacer

**Status:** ✅ Production Ready
**SwiftUI Mapping:** `Spacer()` -> `<Spacer />`
**Notes:** Uses `flex-grow` to fill available space within a flex container.

### ZStack

**Status:** ✅ Production Ready
**SwiftUI Mapping:** `ZStack(alignment: .center)` -> `<ZStack alignment="center" />`
**Notes:** Stacks children absolutely positioned. Supports `alignment` (top, center, bottom, leading, trailing, topLeading, topTrailing, bottomLeading, bottomTrailing).

### Text

**Status:** ✅ Production Ready
**SwiftUI Mapping:** `Text("Hello")` -> `<Text content="Hello" />`
**Notes:** Supports `font` (title, body, caption) and `color` props.

### Image

**Status:** ✅ Production Ready
**SwiftUI Mapping:** `Image("my-image.png")` -> `<Image src="/my-image.png" />`
**Notes:** A wrapper around `next/image`. Requires `width` and `height` props.

### Button

**Status:** ✅ Production Ready
**SwiftUI Mapping:** `Button("Click me") { action() }` -> `<Button action={action}>Click me</Button>`
**Notes:** Supports `variant` (primary, secondary, destructive) and `disabled` props with hover states.

### TextField

**Status:** ✅ Production Ready
**SwiftUI Mapping:** `TextField("Placeholder", text: $text)` -> `<TextField placeholder="Placeholder" text={binding} />`
**Notes:** Requires a `Binding<string>` for two-way data binding.

### NavigationLink

**Status:** ✅ Production Ready
**SwiftUI Mapping:** `NavigationLink("Go to page") { destination }` -> `<NavigationLink href="/page">Go to page</NavigationLink>`
**Notes:** A wrapper around `next/link`. Supports `target` and `replace` props.

### Divider

**Status:** ✅ Production Ready
**SwiftUI Mapping:** `Divider()` -> `<Divider />`
**Notes:** Renders a horizontal line using `w-full h-px bg-gray-200`.

### ScrollView

**Status:** ✅ Production Ready
**SwiftUI Mapping:** `ScrollView { VStack { Text("Content") } }` -> `<ScrollView><VStack><Text content="Content" /></VStack></ScrollView>`
**Notes:** Provides vertical scrolling. Uses `overflow-y-auto` and `flex-col`.

### List

**Status:** ✅ Production Ready
**SwiftUI Mapping:** `List { Text("Item 1"); Text("Item 2") }` -> `<List><Text content="Item 1" /><Text content="Item 2" /></List>`
**Notes:** Renders a list using `ul` and `li` elements with default Tailwind styling.

### Grid

**Status:** ✅ Production Ready
**SwiftUI Mapping:** `Grid(columns: 2, spacing: 10) { ... }` -> `<Grid columns={2} spacing={10}>...</Grid>`
**Notes:** Implements a CSS Grid layout. Supports `columns`, `rows`, and `spacing` props.

### Label

**Status:** ✅ Production Ready
**SwiftUI Mapping:** `Label("Title", systemImage: "star")` -> `<Label title="Title" systemImage="Star" />`
**Notes:** Combines text and an icon. Uses `lucide-react` for icons. `systemImage` prop should be a valid `lucide-react` icon name.

### Circle

**Status:** ✅ Production Ready
**SwiftUI Mapping:** `Circle().fill(Color.blue).frame(width: 50, height: 50)` -> `<Circle size={50} fill="#3b82f6" />`
**Notes:** Uses `rounded-full` Tailwind class. Supports `size` and `fill` props via style={{ backgroundColor: ... }}.

### SecureField

**Status:** ✅ Production Ready
**SwiftUI Mapping:** `SecureField("Password", text: $password)` -> `<SecureField placeholder="Password" text={binding} />`
**Notes:** Identical to `TextField` but with `type="password"`. Requires a `Binding<string>`.

### Toggle

**Status:** ✅ Production Ready
**SwiftUI Mapping:** `Toggle(isOn: $isEnabled) { Text("Enable Feature") }` -> `<Toggle isOn={binding} label="Enable Feature" />`
**Notes:** Implements a switch toggle. Requires a `Binding<boolean>`.

### Slider

**Status:** ✅ Production Ready
**SwiftUI Mapping:** `Slider(value: $progress, in: 0...100)` -> `<Slider value={progress} min={0} max={100} onChange={handleChange} />`
**Notes:** Implements a range input. Supports `value`, `min`, `max`, `step`, and `onChange` props.

### Stepper

**Status:** ✅ Production Ready
**SwiftUI Mapping:** `Stepper(value: $quantity, in: 1...10)` -> `<Stepper value={quantity} min={1} max={10} onChange={handleChange} />`
**Notes:** Implements a control for incrementing and decrementing a value. Supports `value`, `min`, `max`, `step`, `onChange`, and `label` props.

### Rectangle

**Status:** ✅ Production Ready
**SwiftUI Mapping:** `Rectangle().fill(Color.red).frame(width: 100, height: 50)` -> `<Rectangle width={100} height={50} fill="#ef4444" />`
**Notes:** Renders a basic rectangle. Supports `width`, `height`, and `fill` props via `style={{ backgroundColor: ... }}`.

### RoundedRectangle

**Status:** ✅ Production Ready
**SwiftUI Mapping:** `RoundedRectangle(cornerRadius: 10).fill(Color.blue)` -> `<RoundedRectangle cornerRadius="lg" fill="#3b82f6" />`
**Notes:** Renders a rectangle with rounded corners. Supports `width`, `height`, `fill`, and `cornerRadius` props. `cornerRadius` can be a string (Tailwind size) or a number (pixels).

### Capsule

**Status:** ✅ Production Ready
**SwiftUI Mapping:** `Capsule().fill(Color.green).frame(width: 100, height: 40)` -> `<Capsule width={100} height={40} fill="#22c55e" />`
**Notes:** Renders a capsule shape. Supports `width`, `height`, and `fill` props via `style={{ backgroundColor: ... }}`. Automatically applies `rounded-full`.

### TabView

**Status:** ✅ Production Ready
**SwiftUI Mapping:** `TabView { Text("Tab 1"); Text("Tab 2") }` -> `<TabView labels={["Tab 1", "Tab 2"]}><Text content="Tab 1 content" /><Text content="Tab 2 content" /></TabView>`
**Notes:** Provides a tabbed interface. Requires `labels` prop (array of strings) and children corresponding to each tab.

### GroupBox

**Status:** ✅ Production Ready
**SwiftUI Mapping:** `GroupBox("Settings") { Toggle("Dark Mode", isOn: $darkMode) }` -> `<GroupBox title="Settings"><Toggle isOn={binding} label="Dark Mode" /></GroupBox>`
**Notes:** Bordered container with optional title. Uses subtle gray border and white background.

### Picker

**Status:** ✅ Production Ready
**SwiftUI Mapping:** `Picker("Flavor", selection: $flavor, content: { ForEach(flavors, id: \.self) { Text($0) }})` -> `<Picker selection={binding} label="Flavor" options={flavors.map(f => ({ label: f, value: f }))} />`
**Notes:** Renders a native HTML `<select>` element. Requires `selection` binding and an `options` array.

### DatePicker

**Status:** ✅ Production Ready
**SwiftUI Mapping:** `DatePicker("Birth Date", selection: $birthDate, displayedComponents: .date)` -> `<DatePicker selection={binding} label="Birth Date" />`
**Notes:** Renders a native HTML `<input type="date">` element. Requires a `selection` binding for a `Date` object.

### ColorPicker

**Status:** ✅ Production Ready
**SwiftUI Mapping:** `ColorPicker("Background Color", selection: $bgColor)` -> `<ColorPicker selection={binding} label="Background Color" />`
**Notes:** Renders a native HTML `<input type="color">` element. Requires a `selection` binding for a hex color string.

### ProgressView

**Status:** ✅ Production Ready
**SwiftUI Mapping:** `ProgressView(value: progress)` -> `<ProgressView value={progress} />`
**Notes:** Renders a progress bar. Accepts `value` (0-1) and optional `total` for calculating progress percentage. Uses smooth transitions and accessibility attributes.

### alert (Modifier)

**Status:** ✅ Production Ready
**SwiftUI Mapping:** `.alert("Hi", isPresented: $isPresented) { Button("OK") {} }` -> Wrap the root of your app in `<AlertProvider>` and then use the `useAlert()` hook: `const { showAlert } = useAlert(); showAlert({ title: "Hi", buttons: [{ text: "OK" }] });`
**Notes:** Provides a global alert/dialog system. Requires `AlertProvider` at the root of the application. The `useAlert` hook can be used in any component to trigger an alert.

### sheet (Modifier)

**Status:** ✅ Production Ready
**SwiftUI Mapping:** `.sheet(isPresented: $isPresented) { MySheetView() }` -> Wrap the root of your app in `<SheetProvider>` and then use the `useSheet()` hook: `const { showSheet } = useSheet(); showSheet(<MySheetView />);`
**Notes:** Provides a global sheet/modal system. Requires `SheetProvider` at the root of the application. The `useSheet` hook can be used in any component to show a sheet with any React component as its content.

### EnvironmentProvider

**Status:** ✅ Production Ready
**SwiftUI Mapping:** `.environment(\.myCustomValue, "Hello")` -> `<EnvironmentProvider values={{ myCustomValue: "Hello" }}>...</EnvironmentProvider>`
**Notes:** Provides a way to pass data down the component tree without having to pass props down manually at every level.

### GeometryReader

**Status:** ✅ Production Ready
**SwiftUI Mapping:** `GeometryReader { geometry in Text("Size: \(geometry.size.width)") }` -> `<GeometryReader>{({ width, height }) => <Text content={`Size: ${width}x${height}`} />}</GeometryReader>`
**Notes:** Provides parent container dimensions to children via callback. Uses ResizeObserver for responsive updates and requires client-side rendering.

### useEnvironment

**Status:** ✅ Production Ready
**SwiftUI Mapping:** `@Environment(\.myCustomValue) var myValue` -> `const { myCustomValue } = useEnvironment();`
**Notes:** A hook to access environment values provided by an `EnvironmentProvider` higher up in the component tree.

### Transition

**Status:** ✅ Production Ready
**SwiftUI Mapping:** `.transition(.slide)` -> `<Transition type="slide" isActive={...}>...</Transition>`
**Notes:** Provides a simple way to animate components in and out. Uses `framer-motion`'s `AnimatePresence` and `motion.div`. Supports `opacity`, `slide`, and `scale` transitions. `isActive` prop controls visibility.

### MotionModifier

**Status:** ✅ Production Ready
**SwiftUI Mapping:** `.animation(.easeInOut(duration: 0.3))` -> `<MotionModifier type="default" duration={0.3}>...</MotionModifier>`
**Notes:** Advanced animation wrapper using framer-motion. Supports multiple animation types (default, slide, scale, fade, bounce). Provides hover/tap animations and layout animations. Can be used as HOC with `withMotion()` function.

### useObservedObject

**Status:** ✅ Production Ready
**SwiftUI Mapping:** `@ObservedObject var model: MyModel` -> `const model = useObservedObject(new MyModel());`
**Notes:** A hook to make a class instance reactive. The class must have a `notify()` method to signal changes and a `subscribe()` method to allow the hook to listen for changes.

### Lifecycle Modifiers (onAppear, onDisappear)

**Status:** ✅ Production Ready
**SwiftUI Mapping:** `.onAppear { print("View appeared") }` -> `<LifecycleModifier onAppear={() => console.log("View appeared")}>...</LifecycleModifier>`
**Notes:** Provides lifecycle callbacks for when components mount and unmount. Uses React's useEffect hook internally. Also available as HOC with `withLifecycle(Component, { onAppear, onDisappear })`.
