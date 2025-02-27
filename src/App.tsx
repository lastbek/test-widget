import { miniApp, useSignal } from '@telegram-apps/sdk-react';
import { AppRoot, Button, Caption, IconButton, Link, Modal, Subheadline, Title } from '@telegram-apps/telegram-ui';
import Book from '@/shared/assets/book.jpeg'
import { themeParams } from '@telegram-apps/sdk-react';

console.log(themeParams);


export function App() {
  const isDark = useSignal(miniApp.isDark);

  return (
    <AppRoot
      appearance={isDark ? 'dark' : 'light'}
    >
      <div>
        <div style={{width: '100%', height: '230px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative'}}>
          <img src={Book} alt="Image" style={{width: '100%', height: '100%'}} />
          <IconButton
            mode="gray"
            size="m"
            style={{position: 'absolute', top: '1rem', right: '1rem', backgroundColor: 'white'}}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 22C16.1667 22 15.4583 21.7083 14.875 21.125C14.2917 20.5417 14 19.8333 14 19C14 18.9 14.025 18.6667 14.075 18.3L7.05 14.2C6.78333 14.45 6.475 14.6458 6.125 14.7875C5.775 14.9292 5.4 15 5 15C4.16667 15 3.45833 14.7083 2.875 14.125C2.29167 13.5417 2 12.8333 2 12C2 11.1667 2.29167 10.4583 2.875 9.875C3.45833 9.29167 4.16667 9 5 9C5.4 9 5.775 9.07083 6.125 9.2125C6.475 9.35417 6.78333 9.55 7.05 9.8L14.075 5.7C14.0417 5.58333 14.0208 5.47083 14.0125 5.3625C14.0042 5.25417 14 5.13333 14 5C14 4.16667 14.2917 3.45833 14.875 2.875C15.4583 2.29167 16.1667 2 17 2C17.8333 2 18.5417 2.29167 19.125 2.875C19.7083 3.45833 20 4.16667 20 5C20 5.83333 19.7083 6.54167 19.125 7.125C18.5417 7.70833 17.8333 8 17 8C16.6 8 16.225 7.92917 15.875 7.7875C15.525 7.64583 15.2167 7.45 14.95 7.2L7.925 11.3C7.95833 11.4167 7.97917 11.5292 7.9875 11.6375C7.99583 11.7458 8 11.8667 8 12C8 12.1333 7.99583 12.2542 7.9875 12.3625C7.97917 12.4708 7.95833 12.5833 7.925 12.7L14.95 16.8C15.2167 16.55 15.525 16.3542 15.875 16.2125C16.225 16.0708 16.6 16 17 16C17.8333 16 18.5417 16.2917 19.125 16.875C19.7083 17.4583 20 18.1667 20 19C20 19.8333 19.7083 20.5417 19.125 21.125C18.5417 21.7083 17.8333 22 17 22ZM17 20C17.2833 20 17.5208 19.9042 17.7125 19.7125C17.9042 19.5208 18 19.2833 18 19C18 18.7167 17.9042 18.4792 17.7125 18.2875C17.5208 18.0958 17.2833 18 17 18C16.7167 18 16.4792 18.0958 16.2875 18.2875C16.0958 18.4792 16 18.7167 16 19C16 19.2833 16.0958 19.5208 16.2875 19.7125C16.4792 19.9042 16.7167 20 17 20ZM5 13C5.28333 13 5.52083 12.9042 5.7125 12.7125C5.90417 12.5208 6 12.2833 6 12C6 11.7167 5.90417 11.4792 5.7125 11.2875C5.52083 11.0958 5.28333 11 5 11C4.71667 11 4.47917 11.0958 4.2875 11.2875C4.09583 11.4792 4 11.7167 4 12C4 12.2833 4.09583 12.5208 4.2875 12.7125C4.47917 12.9042 4.71667 13 5 13ZM17 6C17.2833 6 17.5208 5.90417 17.7125 5.7125C17.9042 5.52083 18 5.28333 18 5C18 4.71667 17.9042 4.47917 17.7125 4.2875C17.5208 4.09583 17.2833 4 17 4C16.7167 4 16.4792 4.09583 16.2875 4.2875C16.0958 4.47917 16 4.71667 16 5C16 5.28333 16.0958 5.52083 16.2875 5.7125C16.4792 5.90417 16.7167 6 17 6Z" fill="#2481CC"/>
            </svg>
          </IconButton>
        </div>
        <div style={{padding: '0.75rem 1rem'}}>
          <Title
            level="3"
            weight="2"
            plain={true}
          >
            <span style={{marginRight: '0.5rem'}}>Book Haven</span>
            <Modal
              header={<Modal.Header>Only iOS header</Modal.Header>}
              trigger={
              <IconButton
                mode="gray"
                size="s"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.3335 3.66659H7.66683V4.99992H6.3335V3.66659ZM6.3335 6.33325H7.66683V10.3333H6.3335V6.33325ZM7.00016 0.333252C3.32016 0.333252 0.333496 3.31992 0.333496 6.99992C0.333496 10.6799 3.32016 13.6666 7.00016 13.6666C10.6802 13.6666 13.6668 10.6799 13.6668 6.99992C13.6668 3.31992 10.6802 0.333252 7.00016 0.333252ZM7.00016 12.3333C4.06016 12.3333 1.66683 9.93992 1.66683 6.99992C1.66683 4.05992 4.06016 1.66659 7.00016 1.66659C9.94016 1.66659 12.3335 4.05992 12.3335 6.99992C12.3335 9.93992 9.94016 12.3333 7.00016 12.3333Z" fill="#999999"/>
                </svg>
              </IconButton>
              }
            >
              <div style={{padding: '0 0.5rem 1rem 0.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.625rem'}}>
                <Button stretched={true} size='m' mode='filled'>Bog'lanish</Button>
                <Button stretched={true} size='m' mode='outline'>Kanalga qo'shilish</Button>
                <Caption
                  level="1"
                  weight="3"
                >
                  Powered by <Link href='https://t.me/raqamli_dokon_bot'>Raqamli Dokon</Link>
                </Caption>
              </div>
            </Modal>
          </Title>
          <Caption
            level="1"
            weight="3"
          >
            A digital bookstore offering a wide selection of e-books and audiobooks across all genres.
          </Caption>
        </div>
        <div style={{padding: '1rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem'}}>
          <div style={{border: '1px solid #ddd', borderRadius: '0.75rem', overflow: 'hidden'}}>
            <img src={Book} alt="" style={{width: '100%', height: '182px'}} />
            <div style={{padding: '0.75rem', display: 'flex', flexDirection: 'column'}}>
              <Caption
                level="1"
                weight="2"
              >
                120,000 so'm
              </Caption>
              <Subheadline
                level="1"
                weight="3"
              >
                Blood and Venom
              </Subheadline>
              <Button size='s' mode='outline' style={{marginTop: '1rem'}}>Ulashish</Button>
            </div>
          </div>
          <div style={{border: '1px solid #ddd', borderRadius: '0.75rem', overflow: 'hidden'}}>
            <img src={Book} alt="" style={{width: '100%', height: '182px'}} />
            <div style={{padding: '0.75rem', display: 'flex', flexDirection: 'column'}}>
              <Caption
                level="1"
                weight="2"
              >
                120,000 so'm
              </Caption>
              <Subheadline
                level="1"
                weight="3"
              >
                Blood and Venom
              </Subheadline>
              <Button size='s' mode='outline' style={{marginTop: '1rem'}}>Ulashish</Button>
            </div>
          </div>
          <div style={{border: '1px solid #ddd', borderRadius: '0.75rem', overflow: 'hidden'}}>
            <img src={Book} alt="" style={{width: '100%', height: '182px'}} />
            <div style={{padding: '0.75rem', display: 'flex', flexDirection: 'column'}}>
              <Caption
                level="1"
                weight="2"
              >
                120,000 so'm
              </Caption>
              <Subheadline
                level="1"
                weight="3"
              >
                Blood and Venom
              </Subheadline>
              <Button size='s' mode='outline' style={{marginTop: '1rem'}}>Ulashish</Button>
            </div>
          </div>
          <div style={{border: '1px solid #ddd', borderRadius: '0.75rem', overflow: 'hidden'}}>
            <img src={Book} alt="" style={{width: '100%', height: '182px'}} />
            <div style={{padding: '0.75rem', display: 'flex', flexDirection: 'column'}}>
              <Caption
                level="1"
                weight="2"
              >
                120,000 so'm
              </Caption>
              <Subheadline
                level="1"
                weight="3"
              >
                Blood and Venom
              </Subheadline>
              <Button size='s' mode='outline' style={{marginTop: '1rem'}}>Ulashish</Button>
            </div>
          </div>
        </div>
      </div>
    </AppRoot>
  );
}