/*
Copyright 2016 Mozilla
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed
under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
CONDITIONS OF ANY KIND, either express or implied. See the License for the
specific language governing permissions and limitations under the License.
*/

pub extern crate cssparser;
pub extern crate selectors;
pub extern crate servo_url;
pub extern crate style;
pub extern crate style_traits;

pub mod types;

use style::error_reporting::RustLogReporter;
use style::servo_arc::Arc;
use style::shared_lock::SharedRwLock;

#[inline]
pub fn parse(
    css: &str,
    url: types::Url,
    origin: types::Origin,
    quirks: types::QuirksMode,
    media: types::MediaList
) -> types::ServoStylesheet {
    let lock = SharedRwLock::new();
    let media = Arc::new(lock.wrap(media));

    types::ServoStylesheet::from_str(
        css,
        url,
        origin,
        media,
        lock,
        None,
        &RustLogReporter,
        quirks,
        0
    )
}
