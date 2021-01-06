import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { acyncIncrement, togleTheme, updateCounter } from './redux/actions'
import { rootReducer } from './redux/rootReducer'
import { types } from './redux/types'
import './styles.css'

const app = document.querySelector('#app')
const counter = app.querySelector('#counter'),
      addBtn = app.querySelector('#add'),
      subBtn = app.querySelector('#sub'),
      themeBtn = app.querySelector('#theme')

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk, logger))
)

function render() {
    counter.textContent = store.getState().counter
    document.body.className = store.getState().theme.value
    store.subscribe(() => {
        counter.textContent = store.getState().counter
        document.body.className = store.getState().theme.value;
        [addBtn, subBtn, themeBtn].forEach(btn => {
            btn.disabled = store.getState().disabled.value
        })
    })
    store.dispatch({type: 'INIT_APPLICATION'})
}

app.addEventListener('click', event => {
    switch (event.target.id) {
        case 'add':
            store.dispatch(updateCounter(types.INCREMENT, 1))
            break
        case 'sub':
            store.dispatch(updateCounter(types.DECREMENT, 1))
            break
        case 'async':
            store.dispatch(acyncIncrement(1))
            break
        case 'theme':
            store.dispatch(togleTheme())
    }
})

render()
