import * as React from 'react'
import {
    EuiPage,
    EuiPageBody,
    EuiPageContent,
    EuiPageContentBody,
    EuiPageContentHeader,
    EuiPageContentHeaderSection,
    EuiTitle,
} from '@elastic/eui'

function App() {
    return (
        <EuiPage>
            <EuiPageBody component="div">
                <EuiPageContent
                    verticalPosition="center"
                    horizontalPosition="center"
                >
                    <EuiPageContentHeader>
                        <EuiPageContentHeaderSection>
                            <EuiTitle>
                                <h2>Content title</h2>
                            </EuiTitle>
                        </EuiPageContentHeaderSection>
                    </EuiPageContentHeader>
                    <EuiPageContentBody>Content body</EuiPageContentBody>
                </EuiPageContent>
            </EuiPageBody>
        </EuiPage>
    )
}

export default App
