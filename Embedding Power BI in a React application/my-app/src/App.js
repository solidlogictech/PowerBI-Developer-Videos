import logo from './logo.svg';
import './App.css';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PowerBIEmbed
            embedConfig={{
                type: 'report',   // Supported types: report, dashboard, tile, visual and qna
                id: 'cd330c70-a9e1-406e-bc57-23217f27e780',
                embedUrl: "https://app.powerbi.com/reportEmbed?reportId=cd330c70-a9e1-406e-bc57-23217f27e780&groupId=ef3ce77d-486c-4359-acc1-ac81d7e0ce91&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLU5PUlRILUNFTlRSQUwtSi1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZX19",
                accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IkwxS2ZLRklfam5YYndXYzIyeFp4dzFzVUhIMCIsImtpZCI6IkwxS2ZLRklfam5YYndXYzIyeFp4dzFzVUhIMCJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvOGIzZWJlOTAtNTE5Zi00NmY0LTg3MzMtMjU1YjhkNmU4MWYwLyIsImlhdCI6MTcxNTYxMjUwOCwibmJmIjoxNzE1NjEyNTA4LCJleHAiOjE3MTU2MTczMTIsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84V0FBQUErdWhEWS8zem41WU1zY3U1UGhLNnBYNnZrdmdwRk9NTU5VczBKSDA2OGF2a09Lb1IzZkR6YnlFRU91KzYzcjNwIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6IjIzZDhmNmJkLTFlYjAtNGNjMi1hMDhjLTdiZjUyNWM2N2JjZCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiRGV0dGVybWFuIiwiZ2l2ZW5fbmFtZSI6IkVyaWMiLCJpcGFkZHIiOiI2OC40OS45NS4xMTEiLCJuYW1lIjoiRXJpYyBEZXR0ZXJtYW4iLCJvaWQiOiJhYWY3ZDk0ZC0xMmFmLTQ1NGQtYmU3Mi05ZDdkZTZhMTNiNTkiLCJwdWlkIjoiMTAwMzIwMDM3RjMzNUM2NCIsInJoIjoiMC5BY29Ba0w0LWk1OVI5RWFITXlWYmpXNkI4QWtBQUFBQUFBQUF3QUFBQUFBQUFBRDZBSTguIiwic2NwIjoiQXBwLlJlYWQuQWxsIENhcGFjaXR5LlJlYWQuQWxsIENhcGFjaXR5LlJlYWRXcml0ZS5BbGwgQ29udGVudC5DcmVhdGUgRGFzaGJvYXJkLlJlYWQuQWxsIERhc2hib2FyZC5SZWFkV3JpdGUuQWxsIERhdGFmbG93LlJlYWQuQWxsIERhdGFmbG93LlJlYWRXcml0ZS5BbGwgRGF0YXNldC5SZWFkLkFsbCBEYXRhc2V0LlJlYWRXcml0ZS5BbGwgR2F0ZXdheS5SZWFkLkFsbCBHYXRld2F5LlJlYWRXcml0ZS5BbGwgUGlwZWxpbmUuRGVwbG95IFBpcGVsaW5lLlJlYWQuQWxsIFBpcGVsaW5lLlJlYWRXcml0ZS5BbGwgUmVwb3J0LlJlYWQuQWxsIFJlcG9ydC5SZWFkV3JpdGUuQWxsIFN0b3JhZ2VBY2NvdW50LlJlYWQuQWxsIFN0b3JhZ2VBY2NvdW50LlJlYWRXcml0ZS5BbGwgVGVuYW50LlJlYWQuQWxsIFRlbmFudC5SZWFkV3JpdGUuQWxsIFVzZXJTdGF0ZS5SZWFkV3JpdGUuQWxsIFdvcmtzcGFjZS5SZWFkLkFsbCBXb3Jrc3BhY2UuUmVhZFdyaXRlLkFsbCIsInN1YiI6IjNpaVFWYzZ6b1A1WGJKWjkyT0h6R3piN2p0aFJaek5kYlBPSVE2R0lsRVUiLCJ0aWQiOiI4YjNlYmU5MC01MTlmLTQ2ZjQtODczMy0yNTViOGQ2ZTgxZjAiLCJ1bmlxdWVfbmFtZSI6IkVyaWNEZXR0ZXJtYW5AU29saWRMb2dpY0Rldi5vbm1pY3Jvc29mdC5jb20iLCJ1cG4iOiJFcmljRGV0dGVybWFuQFNvbGlkTG9naWNEZXYub25taWNyb3NvZnQuY29tIiwidXRpIjoiSU5nZlRaMTlGMDJNUVY4SGZzcFlBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiNjJlOTAzOTQtNjlmNS00MjM3LTkxOTAtMDEyMTc3MTQ1ZTEwIiwiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il0sInhtc19wbCI6ImVuIn0.Bc3ZMdGGTU8xbj22vD7eBKZq7u3ICVNUiI-5KFoZ5zXVV0qtME5OzAexWE3RLz5DDUXzdAmJPyV4l7tI4RWccuXyC4LSLV-Sjzc6ZyFrBbQHUkVSXJkAn0ANKLhP-22UQ4xhSOviGaWh-pmm1FPlAgjylVY14zdKq_9rfQ7Ify3hAE0tqwhmRqXhk1vcwDCG_ZKEatZYKK5fdOR8f8_nCOEFUu1yKG3yIDC2WRV5FuR1itVZKrHCi-ESDu2LlA8YJwGFH1CdOxEYrQIqHfCKjrfAk2N6Nk5O4ME3VoIarXCOwwFiIay2iqSVZZY9wRlamCqfump8AS-bM0JyoNUTmQ',
                tokenType: models.TokenType.Aad,
                settings: {
                    panes: {
                        filters: {
                            expanded: false,
                            visible: true
                        }
                    },
                }
            }}

          eventHandlers={
            new Map([
              ['loaded', function () { console.log('Report loaded'); }],
              ['rendered', function () { console.log('Report rendered'); }],
              ['error', function (event) { console.log(event.detail); }]
            ])
          }

          cssClassName={"Embed-container"}

          getEmbeddedComponent={(embeddedReport) => {
            window.report = embeddedReport;
          }}
        />
      </header>
    </div>
  );
}

export default App;
